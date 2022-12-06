const cowsay = require("cowsay");
const Quote = require("inspirational-quotes");

console.log(Quote.getQuote()); // returns quote (text and author)

console.log(
  cowsay.say({
    text: Quote.getQuote().text,
    e: "O O",
    T: " U ",
  })
);



// or cowsay.think()
