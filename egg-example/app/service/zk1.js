/**
 * 2017-9-23 zhengkun
 */
'use strict';
const _ = require('lodash');
module.exports = app => {
  class Zk1 extends app.Service {
    * zk1() {
      const a = [ 'a', 'b', 'c', 'd', 'e' ];
      return _.nth(a, 2);
    }
  }
  return Zk1;
};
