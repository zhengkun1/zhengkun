/**
 * 2017-9-24 zhengkun
 */
'use strict';
const _ = require('lodash');
module.exports = app => {
  class Ladash extends app.Service {
    * test() {
      const a = [ 1, 2, 3, 4, 5 ];
      return _.concat(a, 9);
    }
  }
  return Ladash;
};
