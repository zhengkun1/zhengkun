'use strict';

module.exports = app => {
  app.post('/', 'home.index');
  app.get('/haha', 'home.heihei');
  app.get('/sina', 'home.sina');
  app.get('/sohu', 'home.sohu');
  app.get('/test', 'home.test');
  app.get('/lodash', 'home.lodash');
  app.post('/zk', 'home.zk');
  app.get('/zheng', 'home.zhengkun');
  app.post('/zhengkun', 'home.zheng');
  app.post('/date', 'home.date');
  app.get('/lodash1', 'home.lodash1');
  app.get('/collection', 'home.collection');
  app.post('/create', 'test.create');
  app.post('/get', 'test.get');
  app.post('/update', 'test.update');
  app.post('/delete', 'test.delete');
  app.post('/create1', 'test.create1');
  app.post('/get1', 'test.get1');
  app.post('/update1', 'test.update1');
  app.post('/delete1', 'test.delete1');


};
