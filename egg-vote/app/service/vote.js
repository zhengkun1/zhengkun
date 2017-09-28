/**
 * 2017-9-28 zhengkun
 */
'use strict';
const knex = require('knex');
module.exports = app => {
  class Vote extends app.Service {
    * create(a) {
      try {
        yield app.mysql.insert('用户表', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * delete(a) {
      try {
        yield app.mysql.delete('用户表', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * update(a) {
      try {
        yield app.mysql.update('用户表', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * get(a) {
      try {
        yield app.mysql.selection('用户表', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * create1(a) {
      try {
        yield app.mysql.insert('作品', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * delete1(a) {
      try {
        yield app.mysql.delete('作品', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * update1(a) {
      try {
        yield app.mysql.update('作品', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * get1(a) {
      try {
        yield app.mysql.selection('作品', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
};
