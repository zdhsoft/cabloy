module.exports = app => {
  class StatsController extends app.Controller {
    async get() {
      const { module, name, nameSub } = this.ctx.request.body;
      // only support user stats
      const provider = this.ctx.bean.stats._findStatsProvider({ module, name });
      if (!provider.user) this.ctx.throw(403);
      // get
      const res = await this.service.stats.get({
        module,
        name,
        nameSub,
        user: this.ctx.state.user.op,
      });
      this.ctx.success(res);
    }
  }

  return StatsController;
};
