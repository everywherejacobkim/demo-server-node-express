const express = require('express');
const app = express();

// Open Server
app.listen(8080, function(){
    console.log('listening on 8080');
}); 

app.get('/pet', function(req, res){
    res.send("Hello! This is page for shopping pet supplies.");
});

app.get('/beauty', function(req, res){
    res.send("Hello! This is page for shopping beauty products.");
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});