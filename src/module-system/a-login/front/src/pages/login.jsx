import Vue from 'vue';
export default {
  meta: {
    title: 'Sign In',
    size: 'small',
    sizeFixed: true,
  },
  data() {
    return {
      state: this.$f7route.query.state || 'login',
      providers: null,
      showClose: false,
      tabPrefix: Vue.prototype.$meta.util.nextId('tab'),
    };
  },
  computed: {
    title() {
      return this.$store.getters['auth/title'];
    },
  },
  mounted() {
    this.showClose = this.$meta.vueLayout.backLink(this);
  },
  created() {
    // this.state = 'migrate';
    this.loadAuthProviders();
  },
  render() {
    return (
      <eb-page login-screen={true} no-toolbar={false} no-navbar={true} no-swipeback={true}>
        {this._renderContainer()}
      </eb-page>
    );
  },
  methods: {
    onClose() {
      this.$f7router.back();
    },
    _getMetaScene(item, providerScene) {
      const meta = item.meta;
      if (meta.scene) {
        const scene = item.metaScenes && item.metaScenes[providerScene];
        return (scene && scene.meta) || meta;
      }
      return meta;
    },
    async loadAuthProviders() {
      const action = {
        actionModule: 'a-login',
        actionComponent: 'ebAuthProviders',
        name: 'loadAuthProviders',
      };
      this.providers = await this.$meta.util.performAction({ ctx: this, action, item: { state: this.state } });
    },
    _getRenderComponents({ inline }) {
      const renderComponents = [];
      for (const provider of this.providers) {
        for (const providerScene in provider.renderComponents) {
          const renderComponent = provider.renderComponents[providerScene];
          const metaScene = this._getMetaScene(provider, providerScene);
          const item = {
            provider,
            providerScene,
            renderComponent,
          };
          if (Boolean(inline) === Boolean(metaScene.inline)) {
            renderComponents.push(item);
          }
        }
      }
      return renderComponents;
    },
    _getComponentFullName(provider, providerScene) {
      const metaScene = this._getMetaScene(provider, providerScene);
      let fullName = `${metaScene.render.module}:${metaScene.render.name}`;
      if (provider.meta.scene) {
        fullName = `${fullName}:${providerScene}`;
      }
      return fullName;
    },
    _getComponentProps(provider, providerScene) {
      return {
        state: this.state,
        provider,
        providerModule: provider.module,
        providerName: provider.providerName,
        providerScene: provider.meta.scene ? providerScene : null,
      };
    },
    _renderLoginTop_single(inlineComponent) {
      const { provider, providerScene } = inlineComponent;
      const metaScene = this._getMetaScene(provider, providerScene);
      const options = {
        props: this._getComponentProps(provider, providerScene),
      };
      return (
        <eb-component module={metaScene.render.module} name={metaScene.render.name} options={options}></eb-component>
      );
    },
    _renderLoginTop_multiple(inlineComponents) {
      const domButtons = [];
      const domTabs = [];
      for (const index in inlineComponents) {
        const { provider, providerScene } = inlineComponents[index];
        const metaScene = this._getMetaScene(provider, providerScene);
        const fullName = this._getComponentFullName(provider, providerScene);
        const tabId = `${this.tabPrefix}_${fullName}`.replace(/[:-]/g, '_');
        domButtons.push(
          <f7-link key={fullName} tab-link={`#${tabId}`} tab-link-active={parseInt(index) === 0}>
            {provider.meta.titleLocale}
          </f7-link>
        );
        const options = { props: this._getComponentProps(provider, providerScene) };
        domTabs.push(
          <f7-tab key={fullName} id={tabId} tab-active={parseInt(index) === 0}>
            <eb-component
              module={metaScene.render.module}
              name={metaScene.render.name}
              options={options}
            ></eb-component>
          </f7-tab>
        );
      }
      return (
        <div>
          <f7-toolbar top tabbar>
            {domButtons}
          </f7-toolbar>
          <f7-tabs>{domTabs}</f7-tabs>
        </div>
      );
    },
    _renderLoginTop() {
      if (!this.providers) return null;
      // providers
      const inlineComponents = this._getRenderComponents({ inline: true });
      if (inlineComponents.length === 0) return null;
      // check length
      if (inlineComponents.length === 1) {
        return this._renderLoginTop_single(inlineComponents[0]);
      }
      return this._renderLoginTop_multiple(inlineComponents);
    },
    _renderLoginBottom() {
      if (this.state === 'migrate') return null;
      if (!this.providers) return null;
      const buttonComponents = this._getRenderComponents({ inline: false });
      if (buttonComponents.length === 0) return null;
      // buttons
      const domButtons = [];
      for (const buttonComponent of buttonComponents) {
        const { provider, providerScene } = buttonComponent;
        const metaScene = this._getMetaScene(provider, providerScene);
        const fullName = this._getComponentFullName(provider, providerScene);
        const options = {
          attrs: { class: 'btn' },
          props: this._getComponentProps(provider, providerScene),
        };
        domButtons.push(
          <eb-component
            key={fullName}
            module={metaScene.render.module}
            name={metaScene.render.name}
            options={options}
          ></eb-component>
        );
      }
      return <div class="btns">{domButtons}</div>;
    },
    _renderContainer() {
      if (!this.providers) return null;
      // close
      let domClose;
      if (this.showClose) {
        domClose = (
          <f7-link class="close" iconF7=":login:chevron-left" onClick={this.onClose}>
            {this.state === 'login' ? this.$text('LookAround') : ''}
          </f7-link>
        );
      }
      // title
      const domTitle = <f7-login-screen-title>{this.title}</f7-login-screen-title>;
      // title sub
      let domTitleSub;
      if (this.state === 'migrate') {
        domTitleSub = (
          <f7-login-screen-title class="sub-title">{this.$text('SignInTheTargetAccount')}</f7-login-screen-title>
        );
      }
      // loginTop
      const domLoginTop = this._renderLoginTop();
      // loginBottom
      const domLoginBottom = this._renderLoginBottom();
      // loginLine
      let domLoginLine;
      if (domLoginTop && domLoginBottom) {
        domLoginLine = <eb-divider-line class="divider-line" text={this.$text('OR')}></eb-divider-line>;
      }
      // lineAndBottom
      let domLineAndBottom;
      if (domLoginLine || domLoginBottom) {
        domLineAndBottom = (
          <f7-block>
            {domLoginLine}
            {domLoginBottom}
          </f7-block>
        );
      }
      // container
      return (
        <div class="eb-login-container">
          {domClose}
          {domTitle}
          {domTitleSub}
          {domLoginTop}
          {domLineAndBottom}
        </div>
      );
    },
  },
};
