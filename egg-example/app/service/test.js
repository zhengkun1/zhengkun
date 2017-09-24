/**
 * 2017-9-23 zhengkun
 */


'use strict';
module.exports = app => {
  class Test extends app.Service {
    * test() {
      return 'kkkkk';
    }
  }
  return Test;
};
