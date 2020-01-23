exports.up = knex => {
  return knex.schema.createTable('characters', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('quote')
    table.string('voice_actor')
    table.string('movie_id')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('characters')
}
