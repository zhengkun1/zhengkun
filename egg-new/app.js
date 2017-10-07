/**
 * 2017-9-25 zhengkun
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
        table.integer('integer').notNullable().defaultTo(0);
        table.biginteger('biginteger').notNullable().defaultTo(0);
        table.decimal('decimal').notNullable().defaultTo(0);
        table.float('float', 7, 4).notNullable().defaultTo();
        table.date('date').notNullable().defaultTo('2017-10-7');
        table.time('time').notNullable().defaultTo(0);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
      yield ctx.helper.unique(app, 'user', 'float');
    }
    ctx.logger.info('some request data');

  });
};
