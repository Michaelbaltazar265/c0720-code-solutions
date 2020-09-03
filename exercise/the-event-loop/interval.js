/* eslint-disable no-console */
let countdown = 3; 
const timer = setInterval(count, 1000); 
function count (){ 
    if (countdown === 3){ 
        console.log("3")
        countdown--; 
    }
     else if (countdown === 2){ 
         console.log("2")
        countdown--;
     }
     else if (countdown === 1){ 
        console.log("1")
       countdown--;
    }
    else if (countdown === 0){ 
        console.log("Blast off!!")
       countdown--;
    }
    else{ 
        clearInterval(timer);
    }
}
//console.log("Blast off!!")

