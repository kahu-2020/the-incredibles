exports.up = (knex, Promise) => {
  return knex.schema.createTable('characters', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('voice actor')
    table.string('quote')
    table.integer('movie_id')
    
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('characters')
}

