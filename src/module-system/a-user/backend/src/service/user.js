const require3 = require('require3');
const extend = require3('@zhennann/extend');

module.exports = app => {
  class User extends app.Service {
    async save({ data, user }) {
      // id
      data.id = user.id;
      // readOnly
      delete data.userName;
      delete data.email;
      delete data.mobile;
      delete data.locale;
      // save
      return await this.ctx.bean.user.save({ user: data });
    }

    async saveAvatar({ data, user }) {
      const userData = { id: user.id, avatar: data.avatar };
      return await this.ctx.bean.user.save({ user: userData });
    }

    async saveLocale({ data, user }) {
      const userData = { id: user.id, locale: data.locale };
      return await this.ctx.bean.user.save({ user: userData });
    }

    async changeUserName({ data, user }) {
      const userData = { id: user.id, userName: data.userName };
      return await this.ctx.bean.user.changeUserName({ user: userData });
    }

    async agent({ userId }) {
      return await this.ctx.bean.user.agent({ userId });
    }

    async agentsBy({ userId }) {
      return await this.ctx.bean.user.agentsBy({ userId });
    }

    async userByMobile({ mobile }) {
      return await this.ctx.bean.user.exists({ mobile });
    }

    async addAgent({ userIdAgent, userId }) {
      return await this.ctx.bean.user.addAgent({ userIdAgent, userId });
    }

    async removeAgent({ userIdAgent, userId }) {
      return await this.ctx.bean.user.removeAgent({ userIdAgent, userId });
    }

    async switchAgent({ userIdAgent }) {
      return await this.ctx.bean.user.switchAgent({ userIdAgent });
    }

    async switchOffAgent() {
      return await this.ctx.bean.user.switchOffAgent();
    }

    async authentications({ user }) {
      // 1. get auth providers list from a-login
      let listLogin = extend(true, [], this.ctx.bean.authProviderCache.getAuthProvidersConfigForLogin());
      if (listLogin.length === 0) return [];
      // 2. list aAuth
      const sql = `
        select a.id,a.providerId,a.providerScene,b.module,b.providerName from aAuth a
          inner join aAuthProvider b on a.providerId=b.id
          where a.iid=? and a.userId=?
      `;
      const list = await this.ctx.model.query(sql, [this.ctx.instance.id, user.id]);
      // 3. map
      for (const auth of list) {
        const authId = auth.id;
        const provider = listLogin.find(item => item.module === auth.module && item.providerName === auth.providerName);
        // maybe disabled
        if (!provider) continue;
        // meta
        if (!provider.meta.scene) {
          provider.scenes.default.__authId = authId;
        } else {
          const scene = provider.scenes[auth.providerScene];
          // // maybe disabled
          if (!scene) continue;
          scene.__authId = authId;
        }
      }
      // 4. filter inner || disableAssociate:true and no __authId
      listLogin = listLogin.filter(item => {
        for (const sceneName of Object.keys(item.scenes)) {
          const scene = item.scenes[sceneName];
          const metaScene = this._getMetaScene(item, sceneName);
          if (metaScene.inner || (metaScene.disableAssociate && !scene.__authId)) {
            delete item.scenes[sceneName];
          }
        }
        return Object.keys(item.scenes).length > 0;
      });
      // ok
      return listLogin;
    }

    _getMetaScene(item, sceneName) {
      const meta = item.meta;
      if (meta.scene) {
        const scene = item.metaScenes && item.metaScenes[sceneName];
        return (scene && scene.meta) || meta;
      }
      return meta;
    }

    async authenticationDisable({ authId, user }) {
      // must use userId in where
      await this.ctx.model.query('delete from aAuth where iid=? and id=? and userId=?', [
        this.ctx.instance.id,
        authId,
        user.id,
      ]);
    }

    async themeLoad({ user }) {
      const name = `user-theme:${user.id}`;
      return await this.ctx.bean.status.get(name);
    }

    async themeSave({ theme, user }) {
      const name = `user-theme:${user.id}`;
      await this.ctx.bean.status.set(name, theme);
    }
  }

  return User;
};
