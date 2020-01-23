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

<<<<<<< HEAD

=======
// LINK ID WITH HYPERLINK ON HOMEPAGE
router.get('/:id', (req, res) => {
  db.getChar()
    .then(chars => {
      res.render('characters', {characters: chars})
    })

})
>>>>>>> 334d9de5e46484101c9485a0ee9763bb6824d74a

module.exports = router
