'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = yield this.service.home.find();
    }
    * heihei() {
      this.ctx.body = 'heiheihei';
    }
  }
  return HomeController;
};
