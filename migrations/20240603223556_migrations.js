/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", function (table) {
      table.increments("id"); // Primary Key
      table.string("username").notNullable();
      table.string("password").notNullable();
      table.string("email").notNullable().unique();
    })
    .createTable("lists", function (table) {
      table.increments("id");
      table.integer("user_id").unsigned().notNullable();
      table
        .foreign("user_id")
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("products", function (table) {
      table.increments("id");
      table.string("product_name");
      table.string("product_image");
      table.json("certifications");
      table.json("ingredients");
      table.json("categories");
      table.string("eco_score");
      table.string("nutri_score");
    })
    .createTable("list_products", function (table) {
      table.increments("id");
      table.integer("list_id").unsigned().notNullable();
      table
        .foreign("list_id")
        .references("id")
        .inTable("lists")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.integer("product_id").unsigned().notNullable();
      table
        .foreign("product_id")
        .references("id")
        .inTable("products")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.integer("quantity");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable("list_products")
    .dropTable("products")
    .dropTable("lists")
    .dropTable("users");
};
