#!/usr/bin/env node

const path = require('path');
const Bagpipe = require('bagpipe');
const fs = require('fs');
const querystring = require('querystring');
const request = require('npm-request');
const argv = require('./lib/parse_argv')('sync');

const args = argv.args;
const registrys = [argv.registry];
const registrywebs = {};
registrywebs[argv.registry] = argv.registryweb;

// const nodeps = !argv.deps;
// const publish = !!argv.syncPublish;

const names = args.concat();
let packageName;
let dependencies = [];
let isPrivate = false;

const packagePath = path.join(process.cwd(), 'packages/cabloy/package.json');
if (!names.length && fs.existsSync(packagePath)) {
  try {
    console.log('Parse `package.json` file now...');
    const pkg = require(packagePath);
    packageName = pkg.name;
    const dependenciesMap = {};
    for (const key in pkg.dependencies || {}) {
      dependenciesMap[key] = pkg.dependencies[key];
    }
    for (const key in pkg.devDependencies || {}) {
      dependenciesMap[key] = pkg.devDependencies[key];
    }
    dependencies = Object.keys(dependenciesMap);
    isPrivate = !!pkg.private;
  } catch (err) {
    console.log('Parse `package.json` file error: %s', err.message);
    process.exit(1);
  }
}

if (names && names.length) {
  syncByNames(names);
} else if (packageName) {
  syncByPackage(packageName);
} else {
  console.log(`Usage: $ cnpm sync [moduleName1 moduleName2 ...]
Options:
  --publish        sync as publish
  --no-deps        do not sync dependencies and devDependencies`);
  process.exit(1);
}

function showlog(registry, syncInfo, done) {
  request(
    {
      method: 'GET',
      path: syncInfo.logurl + '?offset=' + syncInfo.lastLines,
    },
    {
      registry,
      configFile: argv.userconfig,
    },
    function (err, info) {
      if (err) {
        return done(err);
      }
      if (!info || !info.log) {
        return setTimeout(showlog.bind(null, registry, syncInfo, done), 2000);
      }
      const log = info.log.trim();
      console.log(log);
      syncInfo.lastLines += log.split('\n').length;
      if (log.indexOf('[done] Sync ' + syncInfo.name) >= 0) {
        done();
      } else {
        setTimeout(showlog.bind(null, registry, syncInfo, done), 2000);
      }
    }
  );
}

function sync(registry, name, callback) {
  let url = name + '/sync?';
  url += querystring.stringify({
    // publish,
    // nodeps,
    sync_upstream: true,
  });
  console.log('sync %s, PUT %s/%s', name, registry, url);
  const realRegistry =
    registry === 'https://registry.npmmirror.com' ? 'https://registry-direct.npmmirror.com' : registry;
  request(
    {
      method: 'PUT',
      path: url,
      data: {},
    },
    {
      registry: realRegistry,
      configFile: argv.userconfig,
    },
    function (err, result, data, res) {
      if (err) {
        return callback(err);
      }
      if (res.statusCode === 404 || !result || !result.ok) {
        if (result.reason) {
          console.error('[%s] %s: %s', res.statusCode, result.error, result.reason);
        }
        return callback(null, {
          ok: false,
          statusCode: res.statusCode,
          result,
          data,
        });
      }
      const syncInfo = {
        name,
        lastLines: 0,
        logurl: name + '/sync/log/' + result.logId,
      };
      console.log('logurl: %s/sync/%s#logid=%s', registrywebs[registry], name, result.logId);
      showlog(registry, syncInfo, function (err) {
        if (err) {
          return callback(err);
        }
        callback(null, { ok: true });
      });
    }
  );
}

function syncByNames(names) {
  const queue = new Bagpipe(1);
  let remain = names.length * registrys.length;
  if (!names) {
    console.log('Can not find any packages to sync.');
    process.exit(0);
  }
  console.log('Start sync %j.', names);
  const fail = {};
  const success = {};
  registrys.forEach(function (registry) {
    names.forEach(function (name) {
      queue.push(sync, registry, name, function (err, data) {
        remain--;
        if (err) {
          console.error(err.message);
          fail[name] = true;
        } else if (!data.ok) {
          fail[name] = true;
        } else {
          success[name] = true;
        }
        if (!remain) {
          for (const n in success) {
            if (fail[n]) {
              delete success[n];
            }
          }
          console.log('Sync all packages done, successed: %j, failed: %j', Object.keys(success), Object.keys(fail));
          process.exit(0);
        }
      });
    });
  });
}

function syncByPackage(packageName) {
  if (isPrivate) {
    return syncByNames(dependencies);
  }

  if (!argv.onlyPackage) {
    dependencies.unshift(packageName);
    return syncByNames(dependencies);
  }

  syncByNames([packageName]);
}
