exports.seed = knex =>
  knex('movies').del()
    .then(() =>
      knex('movies').insert([

        { id: 1, name: 'Toy Story', release_year: 1995, director: 'John Lasseter', image: 'https://api.time.com/wp-content/uploads/2015/11/8.jpg?w=600&quality=85'  },
        
        { id: 2, name: 'Monsters Inc.,', release_year: 2001, director: 'Pete Docter', image: 'https://lumiere-a.akamaihd.net/v1/images/image_3c4add40.jpeg?region=0,0,300,450' },
        
        { id: 3, name: 'Finding Nemo', release_year: 2003, director: 'Andrew Stanton', image:'https://lumiere-a.akamaihd.net/v1/images/open-uri20160812-3094-q12ugh_dfd54a6e.jpeg?region=0%2C0%2C640%2C320'}
      ]))