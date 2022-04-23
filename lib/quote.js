//Dependencies
const fs = require('fs');

//module scaffolding
const quotes = {};

quotes.allQuotes = () => {
    const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf-8');
    const quotesArray = fileContents.split(/\r?\n/);

    return quotesArray;
}

module.exports = quotes;