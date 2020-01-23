exports.seed = knex =>
  knex('characters').del()
    .then(() =>
      knex('characters').insert([
        { id: 1, name: 'Crush', voice_actor: 'Andrew Stanton', quote: 'Oh, it\'s awesome, Jellyman. The little dudes are just eggs, we leave \'em on a beach to hatch, and then, coo-coo-cachoo, they find their way back to the big ol\' blue.', movie_id: '3' },

        { id: 2, name: 'Boo', voice_actor: 'Mary Gibbs', quote: 'Mike Wazowski', movie_id: '2' },

        { id: 3, name: 'Rex', voice_actor: 'Wallace Shawn', quote: 'And I\'m from Mattel. Well, I\'m not really from Mattel, I\'m actually from a smaller company that was purchased by Mattel in a leveraged buyout.', movie_id: '1' },

        { id: 4, name: 'Slinky Dog', voice_actor: 'Jim Varney', quote: 'Golly bob howdy!', movie_id: '1' },

        { id: 5, name: 'Randall Boggs', voice_actor: 'Steve Buscemi', quote: 'I heard humans skin monsters and make toilet covers out of their fur', movie_id: '2' },

        { id: 6, name: 'Bruce (the Shark)', voice_actor: 'Barry Humphries', quote: 'I am a nice shark, not a mindless eating machine. If I am to change this image, I must first change myself. Fish are friends, not food.', movie_id: '3' },

        { id: 7, name: 'Mike Wazowski', voice_actor: 'Billy Crystal', quote: 'I am so romantic sometimes, I think I should just marry myself', movie_id: '2' },

        { id: 8, name: 'Sheriff Woody Pride', voice_actor: 'Tom Hanks', quote: 'There\'s a snake in my boot!', movie_id: '1' },

        { id: 9, name: 'Dorry', voice_actor: 'Ellen DeGeneres', quote: 'I shall call him Squishy and he shall be mine and he shall be my Squishy.', movie_id: '3' },

        { id: 10, name: 'James P. Sullivan', voice_actor: 'John Goodman', quote: 'Give it a rest, will ya, butterball?', movie_id: '2' },

        { id: 11, name: '', voice_actor: '', quote: '', movie_id: '' },

        { id: 12, name: '', voice_actor: '', quote: '', movie_id: '' },
      ]))





