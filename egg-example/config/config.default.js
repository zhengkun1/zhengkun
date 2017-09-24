'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1506131705772_8211';

  // add your config here
  config.middleware = [];

  config.security = {
    csrf: {
      ignoreJSON: true,
    },
  };
  return config;
};