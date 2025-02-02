export default {
  data() {
    return {
      layout: {},
    };
  },
  methods: {
    layout_onGetLayoutConfigKeyCurrent() {
      const appKey = this.container.appKey;
      return `appMenu.${appKey}.render.list.layout.current.${this.$view.size}`;
    },
    async layout_onPrepareConfigFull() {
      const appItem = this.base.appInfoCurrent.appItem;
      // configAppMenuBase
      if (!this.base.configAppMenuBase) {
        const layoutItem = await this.$store.dispatch('a/baselayout/getLayoutItem', {
          layoutKey: 'a-app:layoutAppMenuBase',
        });
        this.base.configAppMenuBase = layoutItem.content;
      }
      // configAppMenuCmsBase
      if (appItem.appCms && !this.base.configAppMenuCmsBase) {
        const layoutItem = await this.$store.dispatch('a/baselayout/getLayoutItem', {
          layoutKey: 'a-cms:layoutAppMenuCmsBase',
        });
        this.base.configAppMenuCmsBase = layoutItem.content;
      }
      // combine
      const configAppMenuCmsBase = appItem.appCms ? this.base.configAppMenuCmsBase : null;
      return this.$meta.util.extend({}, this.base.configAppMenuBase, configAppMenuCmsBase, this.base.configAppMenu);
    },
  },
};
