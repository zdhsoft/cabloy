module.exports = app => {

  class Atom extends app.meta.AtomBase {

    async create({ atomClass, item, user }) {
      // super
      const key = await super.create({ atomClass, item, user });
      // add resource
      const res = await this.ctx.model.resource.insert({
        atomId: key.atomId,
      });
      const itemId = res.insertId;
      return { atomId: key.atomId, itemId };
    }

    async read({ atomClass, options, key, user }) {
      // super
      const item = await super.read({ atomClass, options, key, user });
      if (!item) return null;
      // meta
      item.atomNameLocale = this.ctx.text(item.atomName);
      this._getMeta(options, item, true);
      // ok
      return item;
    }

    async select({ atomClass, options, items, user }) {
      // super
      await super.select({ atomClass, options, items, user });
      // meta
      const showSorting = options && options.category;
      for (const item of items) {
        item.atomNameLocale = this.ctx.text(item.atomName);
        this._getMeta(options, item, showSorting);
      }
    }

    async write({ atomClass, target, key, item, options, user }) {
      // super
      await super.write({ atomClass, target, key, item, options, user });
      // update resource
      const data = await this.ctx.model.resource.prepareData(item);
      data.id = key.itemId;
      await this.ctx.model.resource.update(data);
      // update locales
      if (item.atomStage === 1) {
        await this.ctx.bean.resource.setLocales({
          atomId: key.atomId,
          atomName: item.atomName,
        });
      }
    }

    async delete({ atomClass, key, user }) {
      // delete resource
      await this.ctx.model.resource.delete({
        id: key.itemId,
      });
      // delete resource locales
      await this.ctx.model.resourceLocale.delete({
        atomId: key.atomId,
      });
      // super
      await super.delete({ atomClass, key, user });
    }

    _getMeta(options, item, showSorting) {
      // resourceTypes
      const resourceTypes = this.ctx.bean.base.resourceTypes();
      // locale of atomCategoryName
      item.atomCategoryNameLocale = this.ctx.text(item.atomCategoryName);
      // flags
      const flags = [];
      if (item.resourceSorting && showSorting) flags.push(item.resourceSorting);
      // layout
      const layout = options && options.layout;
      if (layout === 'list') {
        // type/categary
        const resourceType = resourceTypes[item.resourceType];
        if (resourceType) {
          const typeCategory = `${resourceType.titleLocale} / ${item.atomCategoryNameLocale}`;
          flags.push(typeCategory);
        }
      }
      // meta
      const meta = {
        summary: item.description,
        flags,
      };
      // ok
      item._meta = meta;
    }

  }

  return Atom;
};
