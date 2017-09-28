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
    const hasUser = yield app.mysql.query(knex.schema.hasTable('用户表').toString());
    if (hasUser.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('用户表', function(table) {
        table.increments();
        table.string('电话').notNullable().defaultTo('');
        table.string('微信号').notNullable().defaultTo('');
        table.string('类型').notNullable().defaultTo('');
        table.integer('投票数').notNullable().defaultTo('0');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
      yield ctx.helper.unique(app, '用户表', '电话');
      yield ctx.helper.unique(app, '用户表', '微信号');
    }
    const hasZuopin = yield app.mysql.query(knex.schema.hasTable('作品').toString());
    if (hasZuopin.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('作品', function(table) {
        table.increments();
        table.string('用户ID').notNullable().defaultTo('');
        table.string('状态').notNullable().defaultTo('');
        table.string('型号').notNullable().defaultTo('');
        table.integer('票数').notNullable().defaultTo('0');
        table.string('图片URL').notNullable().defaultTo('0');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
      yield ctx.helper.unique(app, '作品', '图片URL');
    }
    ctx.logger.info('some request data');

  });
};
