/**
 * 2017-9-23 zhengkun
 */


'use strict';
module.exports = app => {
  class Test extends app.Service {
    * create(a) {
      try {
        yield app.mysql.insert('user', a);
      } catch (b) {
        this.ctx.logger.error(b);
        return false;
      }
      return true;
    }


    * get(z) {
      let res;
      try {
        res = yield app.mysql.get('user', z);
      } catch (b) {
        this.ctx.logger.error(b);
        return false;
      }
      return res;
    }
    * update(k) {
      try {
        yield app.mysql.update('user', k);
      } catch (b) {
        this.ctx.logger.error(b);
        return false;
      }
      return true;
    }

    * delete(l) {
      try {
        yield app.mysql.delete('user', l);
      } catch (b) {
        this.ctx.logger.error(b);
        return false;
      }
      return true;
    }
    * create1(a) {
      try {
        yield app.mysql.insert('student', a);
      } catch (b) {
        this.ctx.logger.error(b);
        return false;
      }
      return true;
    }


    * get1(z) {
      let res;
      try {
        res = yield app.mysql.get('student', z);
      } catch (b) {
        this.ctx.logger.error(b);
        return false;
      }
      return res;
    }
    * update1(k) {
      try {
        yield app.mysql.update('student', k);
      } catch (b) {
        this.ctx.logger.error(b);
        return false;
      }
      return true;
    }

    * delete1(l) {
      try {
        yield app.mysql.delete('student', l);
      } catch (b) {
        this.ctx.logger.error(b);
        return false;
      }
      return true;
    }
  }
  return Test;
};
