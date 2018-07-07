exports.up = function(knex, Promise) {
  return knex.schema.createTable("testing", table => {
    table
      .increments("id")
      .unsigned()
      .primary();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("testing");
};
