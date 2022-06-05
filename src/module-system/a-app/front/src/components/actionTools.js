import Vue from 'vue';
const ebActionBase = Vue.prototype.$meta.module.get('a-base').options.mixins.ebActionBase;

export default {
  meta: {
    global: false,
  },
  mixins: [
    ebActionBase, //
  ],
  methods: {
    async onAction() {
      if (this.action.name === 'openApp') {
        return await this._onActionopenApp();
      }
    },
    async _onActionopenApp() {
      // params
      const { ctx, action } = this.$props;
      const { appKey, appLanguage, appIsolate, external, target } = action;
      // not external
      if (!external) {
        await ctx.$meta.vueLayout.app_openHome({
          view: ctx.$view,
          appKey,
          appLanguage,
          force: false,
        });
        return;
      }
      // external
      const queries = { appKey };
      if (appLanguage) queries.appLanguage = appLanguage;
      if (appIsolate) queries.appIsolate = appIsolate;
      const url = this.$meta.util.combineQueries('', queries);
      window.open(url, target);
    },
  },
};
