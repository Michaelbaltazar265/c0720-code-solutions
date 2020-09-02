/* eslint-disable no-unused-vars */

function compact (array){ 
    const myArray = []; 
   for (let i = 0; i < array.length; i++){ 
       if (array[i]){ 
           myArray.push(array[i])
       }
   } 
   return myArray;
}
   


// create a variable to store the new array
// create a loop that checks the whole array
// within that code block check if array.index has false, 
//"", NaN, null, underfined, -0
//and push only the truthy values to the array that you stored before the for loop
//heelo 
