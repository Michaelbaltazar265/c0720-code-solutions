


const express = require('express'); 
const app = express();

app.use(function (req, res){ 
    req.log
    res.send("Hello")
   
}); 



app.listen(3000, () => { 
    
});