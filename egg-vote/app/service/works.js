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
    * vote() {
      const vote = yield app.mysql.beginTranscation();
      try {
        yield vote.update('works', 'user.vote');
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Works;
};
