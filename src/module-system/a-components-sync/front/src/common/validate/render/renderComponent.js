export default {
  methods: {
    renderComponent(c, context) {
      const { property } = context;
      return this._renderComponent(c, context, property.ebRender);
    },
    _renderComponent(c, context, ebRender) {
      const { parcel, key, property, dataPath } = context;
      const renderProps = this.$meta.util.extend({ options: { props: {} } }, ebRender);
      renderProps.options.props.context = {
        validate: this.validate,
        validateItem: this,
        parcel,
        key,
        property,
        dataPath,
        meta: context.meta,
        getTitle: notHint => {
          return this.getTitle(context, notHint);
        },
        getValue: name => {
          return this.getValue(parcel, name || key);
        },
        setValue: (value, name) => {
          this.setValue(parcel, name || key, value);
        },
      };
      return c('eb-list-item-component', {
        props: renderProps,
      });
    },
  },
};
