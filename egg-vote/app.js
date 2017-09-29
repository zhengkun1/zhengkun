/**
 * 2017-9-28 zhengkun
 */


'use strict';

const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  app.beforeStart(function* () {
    const ctx = app.createAnonymousContext();
    const hasUser = yield app.mysql.query(knex.schema.hasTable('user').toString());
    if (hasUser.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('user', function(table) {
        table.increments();
        table.string('mobile').notNullable().defaultTo('');
        table.string('wechat').notNullable().defaultTo('');
        table.string('name').notNullable().defaultTo('');
        table.string('photo').notNullable().defaultTo('');
        table.string('type').notNullable().defaultTo('');
        table.integer('vote').notNullable().defaultTo('0');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
      yield ctx.helper.unique(app, 'user', 'mobile');
      yield ctx.helper.unique(app, 'user', 'wechat');
    }
    const hasZuopin = yield app.mysql.query(knex.schema.hasTable('works').toString());
    if (hasZuopin.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('works', function(table) {
        table.increments();
        table.string('userID').notNullable().defaultTo('');
        table.string('state').notNullable().defaultTo('');
        table.string('type').notNullable().defaultTo('');
        table.integer('votenumber').notNullable().defaultTo('0');
        table.string('url').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
      yield ctx.helper.unique(app, 'works', 'url');
    }
    ctx.logger.info('some request data');

  });
};
