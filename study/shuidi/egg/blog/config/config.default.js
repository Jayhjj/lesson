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

  config.view = {
    defaultViewEngine:'nunjucks' , //默认的模板引擎
    mapping:{
      '.tpl':'nunjucks'
    }
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1575771835160_2143';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
