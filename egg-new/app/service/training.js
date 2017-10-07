/**
 * 2017-10-7 zhengkun
 */
'use strict';
module.exports = app => {
  class Training extends app.Service {
    * insert(a) {
      try {
        yield app.mysql.insert('user', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Training;
};
