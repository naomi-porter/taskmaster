/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('contestants', (table) => {
    table.increments('id')
    table.string('name')
    table.integer('season')
    table.integer('final_score')
    table.text('image')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('contestants')
};
