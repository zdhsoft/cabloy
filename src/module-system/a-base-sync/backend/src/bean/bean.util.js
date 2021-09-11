const require3 = require('require3');
const moment = require3('moment');
const mparse = require3('egg-born-mparse').default;
const { NodeVM } = require3('vm2');
const utils = require('../common/utils.js');

module.exports = app => {
  const moduleInfo = app.meta.mockUtil.parseInfoFromPackage(__dirname);
  class Util extends app.meta.BeanBase {
    get localConfig() {
      return this.ctx.config.module(moduleInfo.relativeName);
    }

    page(_page, force = true) {
      const pageSize = this.localConfig.pageSize;
      if (!_page) {
        _page = force ? { index: 0 } : { index: 0, size: 0 };
      }
      if (_page.size === undefined || (force && (_page.size === 0 || _page.size === -1 || _page.size > pageSize))) _page.size = pageSize;
      return _page;
    }

    user(_user) {
      return _user || this.ctx.state.user.op;
    }

    moment(date) {
      return moment(date);
    }

    now(fmt, locale) {
      return this.formatDateTime(null, fmt, locale);
    }

    today(fmt, locale) {
      return this.formatDate(null, fmt, locale);
    }

    formatDateTime(date, fmt, locale) {
      locale = locale || this.ctx.locale;
      let timezone = this.localConfig.timezones[locale];
      if (timezone === undefined) {
        timezone = this.localConfig.timezones[app.config.i18n.defaultLocale];
      }
      date = date || new Date();
      fmt = fmt || 'YYYY-MM-DD HH:mm:ss';
      if (typeof date !== 'object') date = new Date(date);
      return moment(date).utcOffset(timezone).format(fmt);
    }

    formatDate(date, sep, locale) {
      if (sep === undefined) sep = '-';
      const fmt = `YYYY${sep}MM${sep}DD`;
      return this.formatDateTime(date, fmt, locale);
    }

    formatTime(date, sep, locale) {
      if (sep === undefined) sep = ':';
      const fmt = `HH${sep}mm${sep}ss`;
      return this.formatDateTime(date, fmt, locale);
    }

    // todo: load locales resources and then format
    fromNow(date /* , locale*/) {
      if (typeof date !== 'object') date = new Date(date);
      return moment(date).fromNow();
    }

    replaceTemplate(content, scope) {
      if (!content) return null;
      return content.toString().replace(/(\\)?{{ *([\w\.]+) *}}/g, (block, skip, key) => {
        if (skip) {
          return block.substring(skip.length);
        }
        const value = this.getProperty(scope, key);
        return value !== undefined ? value : '';
      });
    }

    setProperty(obj, name, value) {
      const names = name.split('.');
      if (names.length === 1) {
        obj[name] = value;
      } else {
        for (let i = 0; i < names.length - 1; i++) {
          const _obj = obj[names[i]];
          if (_obj) {
            obj = _obj;
          } else {
            obj = obj[names[i]] = {};
          }
        }
        obj[names[names.length - 1]] = value;
      }
    }

    getProperty(obj, name, sep) {
      return this._getProperty(obj, name, sep, false);
    }

    getPropertyObject(obj, name, sep) {
      return this._getProperty(obj, name, sep, true);
    }

    _getProperty(obj, name, sep, forceObject) {
      if (!obj) return undefined;
      const names = name.split(sep || '.');
      // loop
      for (const name of names) {
        if (obj[name] === undefined || obj[name] === null) {
          if (forceObject) {
            obj[name] = {};
          } else {
            obj = obj[name];
            break;
          }
        }
        obj = obj[name];
      }
      return obj;
    }

    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    combinePagePath(moduleName, arg) {
      if (!arg || typeof arg !== 'string') return arg;
      const first = arg.charAt(0);
      if (first === '/' || first === '#') return arg;
      const moduleInfo = typeof moduleName === 'string' ? mparse.parseInfo(moduleName) : moduleName;
      return `/${moduleInfo.url}/${arg}`;
    }

    checkDemo() {
      const demo = this.ctx.config.module(moduleInfo.relativeName).configFront.demo;
      if (!demo.enable) return;
      if (this.ctx.state.user.op.userName === 'root') return;
      this.ctx.throw.module(moduleInfo.relativeName, 1014);
    }

    escapeHtml(str) {
      return utils.escapeHtml(str);
    }

    escapeURL(str) {
      return utils.escapeURL(str);
    }

    evaluateExpression({ expression, globals, wrapper }) {
      if (!wrapper) {
        wrapper = 'none';
      } else if (wrapper === true) {
        wrapper = 'commonjs';
      }
      // return vm.runInContext(expression, vm.createContext(globals || {}));
      const vm = new NodeVM({
        console: 'inherit',
        sandbox: globals || {},
        require: false,
        nesting: true,
        wrapper,
      });
      const script = wrapper === 'none' ? `return (${expression})` : expression;
      return vm.run(script);
    }

    hostUtil(options) {
      const self = this;
      return {
        text(...args) {
          const locale = options && options.locale;
          return self.ctx.text.locale(locale || self.ctx.app.config.i18n.defaultLocale, ...args);
        },
        url(str) {
          if (str && (str.indexOf('http://') === 0 || str.indexOf('https://') === 0)) return this.escapeURL(str);
          if (str[0] !== '/') str = '/' + str;
          return self.ctx.bean.base.getAbsoluteUrl(this.escapeURL(str));
        },
        escapeHtml(str) {
          return self.escapeHtml(str);
        },
        escapeURL(str) {
          return self.escapeURL(str);
        },
      };
    }
  }

  return Util;
};
