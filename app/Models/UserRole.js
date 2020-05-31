"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class UserRole extends Model {
  static get table() {
    return "role_user";
  }
  static get createdAtColumn() {
    //
  }
  static get updatedAtColumn() {
    //
  }
}

module.exports = UserRole;
