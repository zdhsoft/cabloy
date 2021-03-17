import Vue from 'vue';
import Base from './base.jsx';
import Page from './page.jsx';
import Layout from './layout.jsx';
import Subnavbar from './subnavbar.jsx';
import Info from './info.jsx';
import Actions from './actions.jsx';
import Validate from './validate.jsx';
const ebAtomClasses = Vue.prototype.$meta.module.get('a-base').options.mixins.ebAtomClasses;
const ebAtomActions = Vue.prototype.$meta.module.get('a-base').options.mixins.ebAtomActions;

// container: {
//   mode,  // edit/view
//   atomId,
//   itemId,
//   layout,
// },

export default {
  mixins: [ ebAtomClasses, ebAtomActions, Base, Page, Layout, Subnavbar, Info, Actions, Validate ],
  data() {
    return {
    };
  },
  created() {
    this.base_loadItem().then(res => {
      if (!res) return;
      this.layout_prepareConfig().then(() => {
        this.base.ready = true;
      });
    });
  },
  beforeDestroy() {
    this.layout.instance = null;
    this.$emit('layoutManager:destroy');
  },
};
