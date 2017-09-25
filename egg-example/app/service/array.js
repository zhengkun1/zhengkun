/**
 * 2017-9-25 zhengkun
 */
'use strict';
const _ = require('lodash');
module.exports = app => {
  class Array extends app.Service {
    * a() {
      return _.zipObject([ 'a', 'b' ], [ 1, 2 ]);
    }
    * zipwith() {
      return _.zipWith([ 1, 2 ], [ 10, 20 ], [ 100, 200 ], function(a, b, c) {
        return a + b + c;
      });
    }
    * countby1() {
      return _.countBy([ 'one', 'two', 'three' ], 'length');
    }
  }
  return Array;
};

