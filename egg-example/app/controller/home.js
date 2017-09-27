'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = yield this.service.home.find();
    }
    * heihei() {
      const a = this.ctx.helper.foo(this.ctx.request.query.a);
      const b = this.ctx.helper.fun(this.ctx.request.query.b);
      const c = this.ctx.helper.zk(this.ctx.request.query.c);
      this.ctx.body = a + b + c;
    }
    * sina() {
      this.ctx.body = yield this.service.home.sina();
    }
    * sohu() {
      this.ctx.body = yield this.service.home.sohu();
    }
    * test() {
      const k = yield this.service.home.test();
      const r = yield this.service.test.test();
      this.ctx.body = k + r;
    }
    * lodash() {
      const a = yield this.service.lodash.test();
      const b = yield this.service.ladash.test();
      this.ctx.body = a + b;
    }
    * zk() {
      this.ctx.body = this.ctx.helper.zheng(this.ctx.request.quert.c);
    }
    * zhengkun() {
      this.ctx.body = yield this.service.home.zhengkun();
    }
    * zheng() {
      this.ctx.body = yield this.service.home.zheng();
    }
    * date() {
      this.ctx.body = yield this.service.home.date();
    }
    * lodash1() {
      this.ctx.body = yield this.service.array.zipwith();
    }
    * collection() {
      this.ctx.body = yield this.service.collection.countby();
    }
  }
  return HomeController;
};
