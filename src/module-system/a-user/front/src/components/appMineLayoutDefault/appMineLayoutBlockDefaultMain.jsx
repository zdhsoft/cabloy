export default {
  meta: {
    global: false,
  },
  props: {
    layoutManager: {
      type: Object,
    },
    layout: {
      type: Object,
    },
    blockConfig: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  render() {
    const mineHeader = this.layoutManager.layout_renderBlock({
      blockName: 'mineHeader',
    });
    return <div>{mineHeader}</div>;
  },
};
