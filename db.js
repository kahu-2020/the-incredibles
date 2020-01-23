const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getMovies: getMovies,
  getChar: getChar, 
  addCharacter: addCharacter,
}

function getMovies(db = connection) {
  return db('movies').select()
}


function getChar(id, db = connection) {
  return db('characters').where('id', id).first()
}

function addCharacter(body, db = connection){
  console.log(body)
  return db('characters')
  .insert({name: body.name, voice_actor: body.voice_actor, quote: body.quote, movie_id: body.movie_id, image: body.image})

}