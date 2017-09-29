'use strict';

module.exports = app => {
  app.post('/user/username', 'user.username');
  app.post('/user/password', 'user.password');
  app.post('/user/login', 'user.login');
  app.post('/mobile/set', 'mobile.set');
  app.post('/mobile/reset', 'mobile.reset');
  app.post('/works/vote', 'works.vote');
  app.post('/works/picture url', 'works.url');
  app.post('/check/picture', 'works.picture');

};
