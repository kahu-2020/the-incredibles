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

// creating character add route to form 
// router.post('/add', (req, res) => {
//   db.addCharacter(req.body)
//   .then(character => {
//     res.redirect('/')
//   })
//   .catch.status(500).send('page not working' + err.message)
// })
router.get('/add', (req,res) => {
  res.render('add')
})

// LINK ID WITH HYPERLINK ON HOMEPAGE
router.get('/characters/:id', (req, res) => {
  db.getChar(req.params.id)
  .then(chars => {
    console.log(chars)
      res.render('characters', {characters: chars})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})




module.exports = router
