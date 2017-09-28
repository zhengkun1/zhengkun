/**
 * 2017-9-28 zhengkun
 */
'use strict';
module.exports = app => {
  class VoteController extends app.Controller {
    * create() {
      this.ctx.body = yield this.service.vote.create(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.vote.delete(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.vote.update(this.ctx.request.body);
    }
    * get() {
      this.ctx.body = yield this.service.vote.get(this.ctx.request.body);
    }
    * create1() {
      this.ctx.body = yield this.service.vote.create1(this.ctx.request.body);
    }
    * delete1() {
      this.ctx.body = yield this.service.vote.delete1(this.ctx.request.body);
    }
    * update1() {
      this.ctx.body = yield this.service.vote.update1(this.ctx.request.body);
    }
    * get1() {
      this.ctx.body = yield this.service.vote.get1(this.ctx.request.body);
    }
  }
  return VoteController;
};
