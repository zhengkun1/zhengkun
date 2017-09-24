/**
 * 2017-9-23 zhengkun
 */


'use strict';
const _ = require('lodash');
module.exports = app => {
  class Home extends app.Service {
    * find() {
      return 'zhengkunzhenshuai';
    }
    * sina() {
      return yield app.curl('http://www.sina.com.cn');
    }
    * sohu() {
      return yield app.curl('http://www.sohu.com.cn');
    }
    * test() {
      return 'hhhhh';
    }
    * zhengkun() {
      const a = [ 'zheng', 'kun' ];
      return _.take(a);
    }
    * zheng() {
      const n = function(x) {
        return 1 + x;
      };
      return n(10);
    }
    * date() {
      const a = new Date();
      const b = a.getHours();
      const c = a.getMonth();
      const d = a.getFullYear();
      const e = a.getDate();
      const f = a.getMinutes();
      const g = a.getSeconds();
      return `${d}-${c + 1}-${e} ${b}:${f}:${g}`;
    }
  }
  return Home;
};
