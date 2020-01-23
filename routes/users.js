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

// router.get('/character/:id', (req, res) => {
//   db.getChar()
//     .then(characters => {

//     })


})

module.exports = router
