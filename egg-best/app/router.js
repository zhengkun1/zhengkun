'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.post('/crate4', 'training.create');
  app.post('/get4', 'training.get');
  app.post('/udpate4', 'training.update');
  app.post('/delete4', 'training.delete');
  app.post('/create', 'test.create');
  app.post('/get', 'test.get');
  app.post('/update', 'test.update');
  app.post('/delete', 'test.delete');
  app.post('/create1', 'test.create1');
  app.post('/get1', 'test.get1');
  app.post('/update1', 'test.update1');
  app.post('/delete1', 'test.delete1');
};
