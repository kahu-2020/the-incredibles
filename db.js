const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getMovies: getMovies,
  getChar: getChar,
  getCharByMovieId: getCharByMovieId,
  addCharacter: addCharacter
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

function getCharByMovieId(db = connection) {
  return db('movies')
    .join('characters', 'movies.id', 'characters.movie_id')
}

function addCharacter(body, db = connection) {
  console.log(body)
  return db('characters')
    .insert({ name: body.name, voice_actor: body.voice_actor, quote: body.quote, movie_id: body.movie_id, image: body.image })
}
