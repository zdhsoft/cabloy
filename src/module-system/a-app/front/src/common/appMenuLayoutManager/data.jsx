const __categoriesTop = {
  'a-app:appDefault': ['General', 'Management', 'System'],
  'a-appbooster:appGeneral': ['Create', 'List', 'Tools'],
  'a-appbooster:appSystem': ['BasicProfile', 'BasicAdmin', 'Settings', 'Tools'],
};

export default {
  data() {
    return {
      data: {
        provider: {
          itemKey: 'id',
        },
      },
    };
  },
  methods: {
    // apps
    async data_provider_onLoadItemsAll() {
      const __appKeyDefault = this.$config.appKey.default;
      const appKey = this.container.appKey;
      // app default
      if (appKey === __appKeyDefault) {
        return await this.data_provider_onLoadItemsAll_appDefault();
      }
      // app other
      return await this.data_provider_onLoadItemsAll_appOther({ appKey });
    },
    async data_provider_onLoadItemsAll_appDefault() {
      // list
      const list = await this.$store.dispatch('a/app/getAppItemsAll');
      // check appUnclassified
      const __appUnclassified = this.$config.appKey.unclassified;
      const index = list.findIndex(item => item.atomStaticKey === __appUnclassified);
      if (index > -1) {
        const res = await this.data_provider_onLoadItemsAll_appOther({ appKey: __appUnclassified });
        if (res.list.length === 0) {
          // remove app
          list.splice(index, 1);
        }
      }
      // ok
      return { list };
    },
    async data_provider_onLoadItemsAll_appOther({ appKey }) {
      const resourcesArrayAll = await this.$store.dispatch('a/base/getResourcesArray', {
        resourceType: 'a-base:menu',
        appKey,
      });
      return { list: resourcesArrayAll };
    },
    // tools
    data_tools_prepareCategoriesTop() {
      const appKey = this.container.appKey;
      return __categoriesTop[appKey] || [];
    },
    data_tools_groupItems({ categories, items, categoriesTop }) {
      if (!categories || !items) return null;
      // categoriesTop
      if (!categoriesTop) {
        categoriesTop = this.data_tools_prepareCategoriesTop();
      }
      // groups
      let groups = categories.map(item => {
        return {
          id: item.id,
          categoryName: item.categoryName,
          categoryNameLocale: item.categoryNameLocale,
          categorySorting: item.categorySorting,
          items: [],
        };
      });
      // sort
      groups = groups.sort((a, b) => {
        const indexA = categoriesTop.indexOf(a.categoryName);
        const indexB = categoriesTop.indexOf(b.categoryName);
        const sortingA = indexA > -1 ? indexA - categoriesTop.length : a.categorySorting;
        const sortingB = indexB > -1 ? indexB - categoriesTop.length : b.categorySorting;
        return sortingA - sortingB;
      });
      // items
      for (const item of items) {
        const groupId = item.atomCategoryId;
        const group = groups.find(item => item.id === groupId);
        if (group) {
          group.items.push(item);
        }
      }
      // filter
      groups = groups.filter(item => item.items.length > 0);
      // ok
      return groups;
    },
  },
};
