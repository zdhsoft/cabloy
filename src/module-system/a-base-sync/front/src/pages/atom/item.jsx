import itemLayoutManager from '../../common/itemLayoutManager/index.jsx';
export default {
  meta: {
    size: 'medium',
  },
  mixins: [ itemLayoutManager ],
  data() {
    const query = this.$f7route.query;
    const mode = query.mode;
    const atomId = parseInt(query.atomId || 0);
    const itemId = parseInt(query.itemId || 0);
    const layout = query.layout;
    return {
      container: {
        mode,
        atomId,
        itemId,
        layout,
      },
    };
  },
  render() {
    return (
      <eb-page withSubnavbar={this.subnavbar.enable}>
        <eb-navbar title={this.page_getTitle()} subtitle={this.page_getSubtitle()} eb-back-link="Back">
          {this.layout_renderBlock({ blockName: 'title' })}
          {this.layout.instance && this.subnavbar.enable && this.layout_renderBlock({ blockName: 'subnavbar' })}
        </eb-navbar>
      </eb-page>
    );
  },
};
