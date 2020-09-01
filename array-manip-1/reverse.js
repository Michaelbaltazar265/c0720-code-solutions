/* eslint-disable no-unused-vars */

function reverse (array){  
    const myArray = []; 
    for (let i = array.length -1; i >= 0; i--){ 
        myArray.push(array[i])
    }
    return myArray;
}