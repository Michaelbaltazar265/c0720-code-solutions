/* eslint-disable no-unused-vars, no-console */

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
]; 

//evenNumbers - all numbers that are divisible by 2 
const evenNumbers = numbers.filter(numbers => numbers % 2 === 0);
console.log(evenNumbers) 
//overFive - all numbers that are greater than 5 
const overFive = numbers.filter(numbers => numbers > 5); 
console.log(overFive) 

//startWithE - all names that start with a 'E'
const startWithE = names.filter(names => names[0] === "E");
console.log(startWithE)
//haveD - all names that include a 'D' or a 'd' 
const haveD = names.filter( names => 
  names.includes("d") || names.includes("D"));
  console.log(haveD)

// 