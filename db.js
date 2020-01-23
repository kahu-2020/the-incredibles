const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getChar: getChar,
  getUsers: getUsers
}

function getUsers (db = connection) {
  return db('users').select()
}

function getChar (id, db = connection) {
  return db('characters').where('id', id).first()
}
