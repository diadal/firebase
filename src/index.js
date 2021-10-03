/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

const path = require('path');

const extendWebpackForWeb2 = function (appDir, conf) {
  const userSWFilePath = path.join(
    appDir,
    'src/assets',
    'firebase-messaging-sw.js'
  );

  const fireSw =  { import: userSWFilePath, filename: 'firebase-messaging-sw.js' };
  const postentry = {...conf.entry, fireSw}
  conf.entry = postentry

}

module.exports = function (api) {
  api.compatibleWith('@quasar/app', '^1.0.0 || ^2.0.0 || ^3.0.0');

  const modeName = api.ctx.modeName;
  const appDir = api.appDir;

  if (['pwa', 'spa', 'ssr'].includes(modeName)) {
    api.extendWebpack((conf) => extendWebpackForWeb2(appDir, conf));

  }


};
