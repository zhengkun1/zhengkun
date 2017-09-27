/**
 * 2017-9-25 zhengkun
 */


'use strict';

const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  app.beforeStart(function* () {
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
    }
    const has10k = yield app.mysql.query(knex.schema.hasTable('10k').toString());
    if (has10k.length === 0) {
      const studentSchema = knex.schema.createTableIfNotExists('10k', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.integer('age').notNullable().defaultTo('0');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(studentSchema.toString());
    }

    const has9k = yield app.mysql.query(knex.schema.hasTable('9k').toString());
    if (has9k.length === 0) {
      const kSchema = knex.schema.createTableIfNotExists('9k', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.integer('age').notNullable().defaultTo('0');
        table.string('class').notNullable().defaultTo('');
        table.integer('xuehao').notNullable().defaultTo('0');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(kSchema.toString());
    }
    const has11k = yield app.mysql.query(knex.schema.hasTable('11k').toString());
    if (has11k.length === 0) {
      const zSchema = knex.schema.createTableIfNotExists('11k', function(table) {
        table.increments();
        table.string('class').notNullable().defaultTo('');
        table.string('name').notNullable().defaultTo('');
        table.integer('xuehao').notNullable().defaultTo('0');
        table.timestamp('create_at').defaultTo();
        table.charset('utf8');
      });

      yield app.mysql.query(zSchema.toString());
    }
  });
};
