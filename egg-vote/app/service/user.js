/**
 * 2017-9-28 zhengkun
 */
'use strict';
module.exports = app => {
  class User extends app.Service {
    * username(a) {
      try {
        yield app.mysql.insert('user', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * password(a) {
      try {
        yield app.mysql.insert('user', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * login(a) {
      let res;
      try {
        yield app.mysql.select('user', a);
      } catch (e) {
        this.ctx.logger.insert(e);
        return false;
      }
      return res;
    }
    * mobile(a) {
      try {
        yield app.mysql.insert('user', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * mobilereset(a) {
      try {
        yield app.mysql.update('uesr', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * vote(a) {
      try {
        yield app.mysql.insert('user', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return User;
};
