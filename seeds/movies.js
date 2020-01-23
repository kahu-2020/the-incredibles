exports.seed = knex =>
  knex('movies').del()
    .then(() =>
      knex('movies').insert([
        { id: 1, name: 'Toy Story', release_year: 1995, director: 'John Lasseter' },
        { id: 2, name: 'Monsters Inc.', release_year: 2001, director: 'Pete Docter' },
        { id: 3, name: 'Finding Nemo', release_year: 2003, director: 'Andrew Stanton' }
      ]))