home page 

- create route to '/'
- retrieve data from movies db
- handlebars display movie title, image 
- handlebars hyperlink to character page '/name'
- handlears hyperlink to addcharacter page '/add'


movie characters page 

- create route to '/:name'
- join the movie selected to the charaters with the same foriegn id (movie name)
- handlebars display the character images, quotes, actor name and character name 
    - hbs button to return to home page '/'

add you character page 

- create route to '/add'
- display form with all inputs 
    - have an input option to dropdown select movie character relates to 
- post route that;
    - adds character to db
    - sets the foreign kty to the drop down selected 
    - redirect to the home page '/' 
 