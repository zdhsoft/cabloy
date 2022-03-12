const config = require('./config/config.js');
const locales = require('./config/locales.js');
const errors = require('./config/errors.js');
const AtomBaseFn = require('./bean/bean.atomBase.js');

// eslint-disable-next-line
module.exports = app => {
  // base
  app.meta.AtomBase = AtomBaseFn(app);

  // aops
  const aops = require('./aops.js')(app);
  // beans
  const beans = require('./beans.js')(app);
  // routes
  const routes = require('./routes.js')(app);
  // controllers
  const controllers = require('./controllers.js')(app);
  // services
  const services = require('./services.js')(app);
  // models
  const models = require('./models.js')(app);
  // constants
  const constants = require('./config/constants.js')(app);
  // meta
  const meta = require('./meta.js')(app);

  return {
    aops,
    beans,
    routes,
    controllers,
    services,
    models,
    config,
    locales,
    errors,
    constants,
    meta,
  };
};
