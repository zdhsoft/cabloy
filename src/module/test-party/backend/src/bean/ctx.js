module.exports = ctx => {
  class ctxBean {

    get name() {
      return ctx.module.info.relativeName;
    }

    actionSync({ a, b }) {
      return a + b;
    }

    async actionAsync({ a, b }) {
      return Promise.resolve(a + b);
    }


  }

  return ctxBean;
};
