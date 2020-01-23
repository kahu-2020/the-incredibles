exports.up = (knex, Promise) => {
  return knex.schema.createTable('characters', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('voice_actor')
    table.string('quote')
    table.string('image')
    table.integer('movie_id')

  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('characters')
}

