/**
 * 2017-9-23 zhengkun
 */

'use strict';
const _ = require('lodash');
module.exports = app => {
  class Zk2 extends app.Service {
    * zk2() {
      const b = [ 1, 2, 3, 4, 5 ];
      return _.join(b, '~');
    }
  }
  return Zk2;
};
