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
  return db('characters').where('id', id).first()
}






