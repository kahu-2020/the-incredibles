
exports.up = function (knex) {
  return knex.schema.table('characters', function (table) {
    table.string('image')
  })
};

exports.down = function (knex) {
  return knex.schema.table('characters', function (table) {
    table.dropColumn('image')
  })
}
