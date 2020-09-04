// create a random number 

const fs = require('fs');
const data = Math.random()
fs.writeFile('random.txt', data, err => {
  if (err) throw err;
}); 

//data.Math.random();