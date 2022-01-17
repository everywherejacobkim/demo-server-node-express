const express = require('express');
const app = express();

// Open Server
app.listen(8080, function(){
    console.log('listening on 8080');
}); 

app.get('/main', function(req, res){
    res.send("Hello! You are in Main Page");
});