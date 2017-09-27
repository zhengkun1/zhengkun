/**
 * 2017-9-26 zhengkun
 */
'use strict';

module.exports = app => {
  class TrainingController extends app.Controller {
    * create() {
      this.ctx.body = yield this.service.training.create();
    }
    * get() {
      this.ctx.body = yield this.service.training.get(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.training.update(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.training.delete(this.ctx.request.body);
    }
  }
  return TrainingController;
};
