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

router.get('/add', (req,res) => {
  res.render('add')
})

// creating character add route to form 
// router.post('/add', (req, res) => {
//   db.addCharacter(req.body)
//   .then(character => {
//     res.redirect('/')
//   })
//   .catch.status(500).send('page not working' + err.message)
// })

module.exports = router
