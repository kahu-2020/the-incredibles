exports.seed = knex =>
  knex('characters').del()
    .then(() =>
      knex('characters').insert([
        { id: 1, name: 'Crush', voice_actor: 'Andrew Stanton', quote: 'Oh, it\'s awesome, Jellyman. The little dudes are just eggs, we leave \'em on a beach to hatch, and then, coo-coo-cachoo, they find their way back to the big ol\' blue.', movie_id: 3, image: 'https://m.media-amazon.com/images/M/MV5BODgxNGE4YzQtMmRkZS00Y2MwLWFjMWMtNTFkZDQyOTEzMDAyXkEyXkFqcGdeQXVyMzQ3Nzk5MTU@._V1_.jpg' },

        { id: 2, name: 'Boo', voice_actor: 'Mary Gibbs', quote: 'Mike Wazowski', movie_id: 2, image: 'https://m.media-amazon.com/images/M/MV5BNDNiZWIzMWEtYzNmYy00Njg2LTlmM2ItOWNjMGNmY2RhNmE3XkEyXkFqcGdeQXVyNjQ4ODE4MzQ@._V1_SX1777_CR0,0,1777,962_AL_.jpg' },

        { id: 3, name: 'Rex', voice_actor: 'Wallace Shawn', quote: 'And I\'m from Mattel. Well, I\'m not really from Mattel, I\'m actually from a smaller company that was purchased by Mattel in a leveraged buyout.', movie_id: 1, image: 'https://lh3.googleusercontent.com/Dlx44MAdf_9EeXWyr0AyYo2rfmj0nIG0Fvfo5kjCXr_iS-Rr1txd5Jt-EIrWHORM5l99=s113' },

        { id: 4, name: 'Slinky Dog', voice_actor: 'Jim Varney', quote: 'Golly bob howdy!', movie_id: 1, image: 'https://lh3.googleusercontent.com/qK2QeGjXsN5_3E9MpX4vvZF9J_W4aFATNo_pAelDSw05xTo1Mz2x6lzRf2VIEuXp7GyE=s136' },

        { id: 5, name: 'Randall Boggs', voice_actor: 'Steve Buscemi', quote: 'I heard humans skin monsters and make toilet covers out of their fur', movie_id: 2, image: 'https://vignette.wikia.nocookie.net/the-secret-world-of-the-animated-characters/images/9/93/-1402676569.jpg/revision/latest?cb=20140613162249' },

        { id: 6, name: 'Bruce (the Shark)', voice_actor: 'Barry Humphries', quote: 'I am a nice shark, not a mindless eating machine. If I am to change this image, I must first change myself. Fish are friends, not food.', movie_id: 3, image: 'https://i.insider.com/5829f8a6341d7ae3018b4846?width=1100&format=jpeg&auto=webp' },

        {
          id: 7, name: 'Mike Wazowski', voice_actor: 'Billy Crystal', quote: 'I am so romantic sometimes, I think I should just marry myself', movie_id: 2, image: 'https://vignette.wikia.nocookie.net/sulleycinematicuniverse/images/0/0b/Greenbillycrystalwithoneeye.jpeg/revision/latest?cb=20190614200344'
        },

        { id: 8, name: 'Sheriff Woody Pride', voice_actor: 'Tom Hanks', quote: 'There\'s a snake in my boot!', movie_id: 1, image: 'https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-10n7ovy_9b42e613.jpeg?region=0%2C0%2C450%2C450' },

        { id: 9, name: 'Dorry', voice_actor: 'Ellen DeGeneres', quote: 'I shall call him Squishy and he shall be mine and he shall be my Squishy.', movie_id: 3, image: 'https://i.pinimg.com/originals/6c/ef/b4/6cefb4fdc44d7d9bfb2ab40a33ff1fed.jpg' },

        { id: 10, name: 'James P. Sullivan', voice_actor: 'John Goodman', quote: 'Give it a rest, will ya, butterball?', movie_id: 2, image: 'https://i.pinimg.com/236x/d0/9a/ae/d09aae957f1761bcea8a47eba818b006--disney-monsters-inc-monsters-inc-characters.jpg' },

        { id: 11, name: 'Nemo', voice_actor: 'Alexander Gould', quote: '\"The water is half empty!\" \"Hmmmm. Really? I\'d say it\'s half full\"', movie_id: 3, image: 'https://vignette1.wikia.nocookie.net/disney/images/c/c6/Nemo_Promo_5.jpg/revision/latest?cb=20151229212619' },

        { id: 12, name: 'Hamm', voice_actor: 'John Ratzenberger', quote: 'Hey, why did the toys cross the road', movie_id: 1, image: 'https://lumiere-a.akamaihd.net/v1/images/open-uri20160811-32147-12n66d4_413f6635.jpeg?region=0%2C0%2C1024%2C320' },
      ]))





