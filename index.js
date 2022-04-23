/**
 * Title: Basic Node js app
 * Descriptions: Learning Node js
 * Author: Animesh karmakar
 * Date: 2022-April-23 
 */

//Dependencies 
const mathLibrary = require('./lib/math');
const quoteLibrary = require('./lib/quote');

//App object 
const App = {};

//Configuration 
App.config = {
    timeBetweenQuotes: 1000
};

let randomN = mathLibrary.getRandomNumber(1, 9);
console.log(randomN);

let quote = quoteLibrary.allQuotes();
console.log(quote);