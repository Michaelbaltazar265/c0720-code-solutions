/* eslint-disable no-console */

const fs = require('fs'); 

//process.argv[2]  
// if statment with all the file names 

if (process.argv[2] === 'cunningham.txt'){ 
   return fs.readFile('cunningham.txt', "utf8", callback)
} 
else if (process.argv[2] === 'dijkstra.txt'){ 
    return fs.readFile('dijkstra.txt', "utf8", callback)
 } 
 else if (process.argv[2] === 'hipster-ipsum.txt'){ 
    return fs.readFile('hipster-ipsum.txt', "utf8", callback)
 } 
 else if (process.argv[2] === 'hopper.txt'){ 
    return fs.readFile('hopper.txt', "utf8", callback)
 } 
 else { 
     console.log("try again")
 }

//fs.readFile(' ','utf8', callback);
//const divide = require('./divide'); 
function callback (err,data){ 
    if (err) throw err;
    console.log(data);
}