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
        table.string('name').notNullable().defaultTo('');
        table.integer('age').notNullable().defaultTo('0');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
      yield this.ctx.helper.unique(app, 'user', 'name');
    }
    const hasStudent = yield app.mysql.query(knex.schema.hasTable('student').toString());
    if (hasStudent.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('student', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.integer('age').notNullable().defaultTo('0');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
      yield ctx.helper.unique(app, 'student', 'name');
    }
    ctx.logger.info('some request data');

  });
};
