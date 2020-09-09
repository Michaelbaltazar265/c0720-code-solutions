

const express = require('express');
const app = express();

app.use(function (req, res, next){
    const options = {root: __dirname };
    
    res.sendFile(req.originalUrl, options, function (err){ 
        if (err){ 
            next(err)
        } 
        else { 
            console.log("success!", )
        }
    })
   
    //next(404)
}); 

app.listen(3000, () => { 
    console.log("Listening on port 3000!!")
})

