/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", function (table) {
      table.increments("id"); // Primary Key
      table.integer("user_list_id").unsigned().notNullable();
      table
        .foreign("user_list_id")
        .references("user_list")
        .inTable("user_list");
      table.string("username").notNullable();
      table.string("password").notNullable();
    })
    .createTable("user_list", function (table) {
      table.increments("id");
      table.string("product_name");
      table.string("eco_score");
      table.bigint("quantity");
    })
    .createTable("products", function (table) {
      table.increments("id");
      table.integer("user_list_id").unsigned().notNullable();
      table
        .foreign("user_list_id")
        .references("user_list")
        .inTable("user_list");
      table.string("product_name");
      table.string("product_image");
      table.string("certifications");
      table.string("ingredients");
      table.string("category");
      table.string("eco_score");
      table.string("nutri_score");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable("products")
    .dropTable("users")
    .dropTable("user_list");
};
