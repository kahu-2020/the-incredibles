const express = require('express')

const db = require('../db')

const router = express.Router()


//route to homepage
router.get('/', (req, res) => {
  db.getMovies()
    .then(movies => {
      res.render('index', { movies: movies })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// LINK ID WITH HYPERLINK ON HOMEPAGE
router.get('/:id', (req, res) => {
  db.getChar()
    .then(chars => {
      res.render('characters', { characters: chars })
    })

})

router.get('/add', (req, res) => {
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
