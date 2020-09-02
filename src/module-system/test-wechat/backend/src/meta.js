module.exports = app => {
  // const schemas = require('./config/validation/schemas.js')(app);
  const meta = {
    base: {
      atoms: {
      },
      functions: {
      },
    },
    validation: {
      validators: {
      },
      keywords: {},
      schemas: {
      },
    },
    event: {
      implementations: {
        'a-wechat:wechatMessage': 'wechatMessage',
        'a-wechat:wechatMessageMini': 'wechatMessageMini',
        'a-base:loginInfo': 'loginInfo',
      },
    },
  };
  return meta;
};
