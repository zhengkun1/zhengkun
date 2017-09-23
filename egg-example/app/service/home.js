/**
 * 2017-9-23 zhengkun
 */


'use strict';
module.exports = app => {
  class Home extends app.Service {
    * find() {
      return 'zhengkunzhenshuai';
    }
  }
  return Home;
};
