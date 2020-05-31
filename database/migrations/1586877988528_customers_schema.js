"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CustomersSchema extends Schema {
  up() {
    this.create("customers", (table) => {
      table.increments();
      table.string("full_name", 80).notNullable();
      table.string("company", 254).notNullable();
      table.string("email", 60).notNullable();
      table.string("phone");
      table.string("address");
      table.string("city");
      table.string("state");
      table.string("post");
      table.string("country");
      table.string("balance");
      table.string("tags");
      table.enum("currency", ["USD", "RWF"]);
      table.string("group");
      table.string("password");
      table.string("confirm_password");
      table.timestamps();
    });
  }

  down() {
    this.drop("customers");
  }
}

module.exports = CustomersSchema;
