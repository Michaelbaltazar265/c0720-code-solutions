/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];
 
// doubled - all numbers multiplied by 2 
const doubled = numbers.map( numbers => numbers * 2);
console.log(doubled) 
// prices - all numbers formatted into "$0.00" strings 
const prices = numbers.map(numbers => numbers.toFixed( 2))
const addDollarSign = prices.map( prices => "$" + prices);
console.log(addDollarSign)
// upperCased - all languages converted to uppercase 
const upperCased = languages.map(languages => languages.toUpperCase()); 
console.log(upperCased) 
// firstLetters - the first letter of each language 
const firstLetters = languages.map(languages => languages[0])
console.log(firstLetters)