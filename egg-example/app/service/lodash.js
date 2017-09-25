/**
 * 2017-9-23 zhengkun
 */
'use strict';
const _ = require('lodash');
module.exports = app => {
  class Lodash extends app.Service {
    * test() {
      const a = [ 1, 2, 3, 4, 5, 6 ];
      return _.slice(a, 3, 5);
    }
  }
  return Lodash;
};
