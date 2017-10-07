'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = yield this.service.training.insert(this.ctx.request.body);
    }
  }
  return HomeController;
};
