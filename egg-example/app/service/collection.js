/**
 * 2017-9-25 zhengkun
 */
'use strict';
const _ = require('lodash');
module.exports = app => {
  class Collection extends app.Service {
    * countby() {
      return _.countBy([ 2.1, 2.5, 3.1 ], Math.floor);
    }
  }
  return Collection;
};

