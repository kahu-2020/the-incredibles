const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getMovies: getMovies,
  getChar: getChar
}

function getMovies(db = connection) {
  return db('movies').select()
}


function getChar(id, db = connection) {
  return db('characters')
  .where('characters.id', id)
  .join('movies', 'movies.id', '=', 'characters.movie_id')
  .select('*', 'characters.name AS characters_name')
}
