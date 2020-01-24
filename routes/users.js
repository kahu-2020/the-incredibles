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
router.get('/characters/:id', (req, res) => {
  db.getChar(req.params.id)
    .then(chars => {
      // console.log(chars)
      res.render('characters', { characters: chars })
    })
})


router.get('/add', (req, res) => {
  res.render('add')
})


//creating character add route to form 
router.post('/add', (req, res) => {
  db.addCharacter(req.body)
    .then(() => {
      res.redirect('/')
    })

})

// LINK ID WITH HYPERLINK ON HOMEPAGE



module.exports = router
