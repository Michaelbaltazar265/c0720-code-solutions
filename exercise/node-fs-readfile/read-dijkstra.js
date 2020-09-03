/* eslint-disable no-console */

const fs = require('fs'); 

fs.readFile('./dijkstra.txt','utf8', callback);
//const divide = require('./divide'); 
function callback (err,data){ 
    if (err) throw err;
    console.log(data);
}