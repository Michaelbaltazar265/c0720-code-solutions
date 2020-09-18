/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance'); 

const michael = takeAChance("Michael");
michael.then(value => { 
        console.log(value)
    });

michael.catch(err => { 
    console.log(err)
});



