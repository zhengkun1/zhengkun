'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.post('/create', 'vote.create');
  app.post('/delete', 'vote.delete');
  app.post('/update', 'vote.update');
  app.post('/get', 'vote.get');
  app.post('/create1', 'vote.create1');
  app.post('/delete1', 'vote.delete1');
  app.post('/update1', 'vote.update1');
  app.post('/get1', 'vote.get1');

};
