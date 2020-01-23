const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
<<<<<<< HEAD
  getMovies: getMovies,
  getCharacters: getCharacters
=======
  getChar: getChar,
  getUsers: getUsers
>>>>>>> 334d9de5e46484101c9485a0ee9763bb6824d74a
}

function getMovies (db = connection) {
  return db('movies').select()


}

<<<<<<< HEAD
function getCharacters (id, db = connection) {
=======
function getChar (id, db = connection) {
>>>>>>> 334d9de5e46484101c9485a0ee9763bb6824d74a
  return db('characters').where('id', id).first()
}






