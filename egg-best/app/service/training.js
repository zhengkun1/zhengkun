/**
 * 2017-9-26 zhengkun
 */
'use strict';
module.exports = app => {
  class Training extends app.Service {
    * create() {
      const a = yield app.mysql.beginTransaction();
      try {
        yield a.insert('user', { name: 'zhengkun', age: 12 });
        yield a.insert('user', { name: 'zhengkun', age: 12 });
        yield a.commit();
      } catch (z) {
        yield a.rollback();
        this.ctx.logger.arror(z);
        return false;
      }
      return true;
    }
    * get() {
      let res;
      const a = yield app.mysql.beginTransaction();
      try {
        yield a.selection();
        yield a.commit();
      } catch (z) {
        yield a.rollback();
        this.ctx.logger.error(z);
        return false;
      }
      return res;
    }

    * update() {
      const a = yield app.mysql.beginTransaction();
      try {
        yield a.update();
        yield a.commit();
      } catch (z) {
        yield a.rollback(z);
        this.ctx.logger.error(z);
        return false;
      }
      return true;
    }

    * delete() {
      const a = yield app.mysql.beginTransaction();
      try {
        yield a.delete();
        yield a.commit();
      } catch (z) {
        yield a.rollback(z);
        this.ctx.logger.error();
        return false;
      }
      return true;
    }
  }
  return Training;
};
