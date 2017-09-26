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
        res = yield app.mysql.select('user', z);
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


    * get1() {
      let res;
      try {
        res = yield app.mysql.select('student');
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

    * create2(a) {
      try {
        yield app.mysql.insert('10k', a);
      } catch (b) {
        this.ctx.logger.error(b);
        return false;
      }
      return true;
    }


    * get2() {
      let res;
      try {
        res = yield app.mysql.select('10k');
      } catch (b) {
        this.ctx.logger.error(b);
        return false;
      }
      return res;
    }
    * update2(k) {
      try {
        yield app.mysql.update('10k', k);
      } catch (b) {
        this.ctx.logger.error(b);
        return false;
      }
      return true;
    }

    * delete2(l) {
      try {
        yield app.mysql.delete('10k', l);
      } catch (b) {
        this.ctx.logger.error(b);
        return false;
      }
      return true;
    }

    * create3(a) {
      try {
        yield app.mysql.insert('9k', a);
      } catch (b) {
        this.ctx.logger.error(b);
        return false;
      }
      return true;
    }


    * get3() {
      let res;
      try {
        res = yield app.mysql.select('9k');
      } catch (b) {
        this.ctx.logger.error(b);
        return false;
      }
      return res;
    }
    * update3(k) {
      try {
        yield app.mysql.update('9k', k);
      } catch (b) {
        this.ctx.logger.error(b);
        return false;
      }
      return true;
    }

    * delete3(l) {
      try {
        yield app.mysql.delete('9k', l);
      } catch (b) {
        this.ctx.logger.error(b);
        return false;
      }
      return true;
    }
  }
  return Test;
};
