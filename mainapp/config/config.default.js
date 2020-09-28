/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1600849492813_1511';

  // add your middleware config here
  config.middleware = [];


  config.view = {
    mapping: {
      '.html': 'ejs'
    }
  }

  config.cluster = {
    listen: {
      path: '',
      port: 7100,
      hostname: '',
    },
  };


  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };


  return {
    ...config,
    ...userConfig,
  };
};
