/**
 * 2017-9-28 zhengkun
 */
'use strict';
const knex = require('knex')({
  client: 'mysql',
});
module.exports = {
  * unique(app, table, colum) {
    const uniqueName = knex.schema.alterTable(table, function(t) {
      t.unique(colum);
    });
    yield app.mysql.query(uniqueName.toString());
  },
};
