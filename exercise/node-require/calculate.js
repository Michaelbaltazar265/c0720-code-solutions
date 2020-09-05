/* eslint-disable no-console */


const add = require('./add');
const subtract = require('./subtract'); 
const multiple = require('./multiply'); 
const divide = require('./divide'); 
const a = parseFloat(process.argv[2])
const b = parseFloat(process.argv[4])
const operation = process.argv[3]

if ( operation === "plus"){ 
    console.log("result", add(a, b));
}
else if ( operation === "minus"){ 
    console.log("result", subtract(a, b));
}
else if ( operation === "times"){ 
    console.log("result", multiple(a, b));
}
else if ( operation === "divide"){ 
    console.log("result", divide(a, b));
}

