export default {
  created() {
    this.$meta.eventHub.$on('atom:action', this.event_onActionChanged);
    this.$meta.eventHub.$on('atom:action:ext', this.event_onActionExtChanged);
    this.$meta.eventHub.$on('atom:actions', this.event_onActionsChanged);
  },
  beforeDestroy() {
    this.$meta.eventHub.$off('atom:action', this.event_onActionChanged);
    this.$meta.eventHub.$off('atom:action:ext', this.event_onActionExtChanged);
    this.$meta.eventHub.$off('atom:actions', this.event_onActionsChanged);
  },
  methods: {
    async event_onActionChanged_create(data) {
      const key = data.key;
      const atom = data.atom;
      // params
      const params = this.base_prepareSelectParams({ setOrder: false });
      const paramsAtomClass = params.atomClass;
      const paramsStage = params.options.stage;

      // check stage
      if (this.base_stageToString(atom.atomStage) !== paramsStage) {
        // do nothing
        return;
      }
      // check atomClass
      if (
        paramsAtomClass &&
        (paramsAtomClass.module !== atom.module || paramsAtomClass.atomClassName !== atom.atomClassName)
      ) {
        // do nothing
        return;
      }
      // refresh list
      await this.data.adapter._loopProviders(async provider => {
        this.data.adapter._callMethodProvider(provider, 'onPageRefresh', { key, item: atom });
      });
    },
    async event_onActionChanged_delete(data) {
      const key = data.key;
      // loop
      await this.data.adapter._loopProviders(async provider => {
        // findItem
        const bundle = this.data.adapter.findItemProvier(provider, key.atomId);
        // item: support tree provider
        const { item } = bundle;
        if (!item) return;
        // delete
        this.data.adapter._callMethodProvider(provider, 'spliceItem', bundle);
      });
    },
    async event_onActionChanged_others(data) {
      const key = data.key;
      // loop
      await this.data.adapter._loopProviders(async provider => {
        // findItem
        const bundle = this.data.adapter.findItemProvier(provider, key.atomId);
        // item: support tree provider
        const { item } = bundle;
        if (!item) return;
        // fetch new atom
        const options = this.base_prepareReadOptions();
        const itemNew = await this.$api.post('/a/base/atom/read', {
          key,
          options,
        });
        this.data.adapter._callMethodProvider(provider, 'replaceItem', bundle, itemNew);
      });
    },
    async event_onActionChanged_addChildNode(data) {
      const key = data.key;
      const node = data.node;
      // loop
      await this.data.adapter._loopProviders(async provider => {
        this.data.adapter._callMethodProvider(provider, 'addChildNode', { key, node });
      });
    },
    async event_onActionChanged_moveNode(data) {
      const key = data.key;
      const node = data.node;
      // loop
      await this.data.adapter._loopProviders(async provider => {
        this.data.adapter._callMethodProvider(provider, 'moveNode', { key, node });
      });
    },
    async event_onActionChanged(data) {
      const action = data.action;
      if (action.name === 'create') {
        // create
        await this.event_onActionChanged_create(data);
      } else if (action.name === 'delete') {
        // delete
        await this.event_onActionChanged_delete(data);
      } else if (action.name === 'addChildNode') {
        // addChildNode
        await this.event_onActionChanged_addChildNode(data);
      } else if (action.name === 'moveNode') {
        // moveNode
        await this.event_onActionChanged_moveNode(data);
      } else {
        // others
        await this.event_onActionChanged_others(data);
      }
    },
    async event_onActionExtChanged(bundle) {
      // loop
      await this.data.adapter._loopProviders(async provider => {
        this.data.adapter._callMethodProvider(provider, 'onActionExt', bundle);
      });
    },
    async event_onActionsChanged(data) {
      const key = data.key;
      // loop
      await this.data.adapter._loopProviders(async provider => {
        // findItem
        const bundle = this.data.adapter.findItemProvier(provider, key.atomId);
        // item: support tree provider
        const { item } = bundle;
        if (!item) return;
        this.data.adapter._callMethodProvider(provider, 'replaceItem', bundle, {
          ...item,
          _actions: null,
        });
      });
    },
  },
};
