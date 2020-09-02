/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
]; 

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
]; 

//sum - all numbers added together 
const sum = (a, b) => a + b;
numbers.reduce(sum); 
console.log(numbers.reduce(sum)); 

// product - all numbers multiplied together 
const product = (a, b) => a * b; 
console.log(numbers.reduce(product)); 

//balance - a number that is the result of combining all transactions in account. 
// The correct answer is 180 





