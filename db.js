const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getMovies: getMovies,
  getCharacters: getCharacters
}

function getMovies (db = connection) {
  return db('movies').select()


}

function getCharacters (id, db = connection) {
  return db('characters').where('id', id).first()
}






