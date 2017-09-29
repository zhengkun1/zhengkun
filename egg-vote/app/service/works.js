/**
 * 2017-9-29 zhengkun
 */
'use strict';

module.exports = app => {
  class Works extends app.Service {
    * url(a) {
      const b = yield app.mysql.beginTranscation();
      try {
        yield b.insert('works', a);
        yield a.commit();
      } catch (e) {
        yield a.rollback();
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * vote(a) {
      try {
        yield app.mysql.update('works', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Works;
};
