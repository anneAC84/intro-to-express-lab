// Import Express
const express = require('express')

// Create an Express app
const app = express()


//1. Be Polite, Greet the User
//Task: Create a route that responds to URLs like /greetings/<username-parameter>.

//Examples: Matches routes like /greetings/Christy or /greetings/Mathilda.

//Response: Include the username from the URL in the response, such as “Hello there, Christy!” or “What a delight it is to see you once more, Mathilda.”


  app.get('/greetings/:username', (req, res) => {
    
    return  res.send(`Hello there ${req.params.username}!`)
   });


   //2. Rolling the Dice
  // Task: Set up a route to handle URLs following the pattern /roll/<number-parameter>.
   
   //Examples: Matches routes like /roll/6 or /roll/20.
   
   //Validation: If the parameter is not a number, respond with “You must specify a number.” For instance, /roll/potato should trigger this response.
   
   //Functionality: If a valid number is provided, respond with a random whole number between 0 and the given number. For example, a request to /roll/16 might respond with “You rolled a 14.” 

   //const urlParams = new URLSearchParams(window.location.search);



app.get('/roll/:number', (req, res) => {

    const number = parseInt

    if (number !== parseInt) {
        
        return res.send('You must specify a number')
        

    } else {
        const getRandomInt = Math.floor(Math.random() * number)
        return res.send(`You rolled a ${getRandomInt}`)
    
    }
    

})


//3. I Want THAT One!
//Task: Create a route for URLs like /collectibles/<index-parameter>.

//Examples: Matches routes such as /collectibles/2 or /collectibles/0.

//Data Array:
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

//Validation: If the index does not correspond to an item in the array, respond with “This item is not yet in stock. Check back soon!”

//Response: Should describe the item at the given index, like “So, you want the shiny ball? For 5.95, it can be yours!” Include both the name and price properties.

app.get('/collectibles/:index', (req, res) => {
 
   const findPropertyValue = (collectibles.name,collectibles.price)
    const name = collectibles.find(name) =

    if (name)
   }
  
return res.send(`So, you want the ${req.params.name} for ${req.params.price}it can be yours!`)
}
     
return res.send('This item is not yet in stock. Check back soon!')
  
})


app.listen(3000, () => {
    console.log('Listening on port 3000')
  })
