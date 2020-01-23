exports.up = (knex, Promise) => {
  return knex.schema.createTable('movies', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('director')
    table.string('release_year')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('movies')
}
