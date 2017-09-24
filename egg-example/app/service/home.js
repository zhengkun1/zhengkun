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
      return `${d}-${this.fo(c + 1)}-${this.fo(e)} ${this.fo(b)}:${this.fo(f)}:${this.fo(g)}`;
    }
    fo(c) {
      if (c < 10) {
        return '0' + c;
      }
      return c;
    }
  }
  return Home;
};
