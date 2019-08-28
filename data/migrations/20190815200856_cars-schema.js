exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments("id"), tbl.text("VIN", 17).notNullable();
    tbl.text("make", 25).notNullable();
    tbl.text("model", 25).notNullable();
    tbl.decimal("mileage", 7).notNullable();
    tbl.text("transmission");
    tbl.text("title");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
