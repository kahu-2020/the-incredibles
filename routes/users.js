const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', {users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


// creating character add route to form 
router.get('/add', (req, res) => {
  db.addCharacter()
  .then(character => {
    res.render('add', {character: character})
  })
  .catch.status(500).send('page not working' + err.message)
})

module.exports = router
