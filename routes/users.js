const express = require('express')

const db = require('../db')

const router = express.Router()


//
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
      res.render('characters', {characters: chars})
    })

})

module.exports = router
