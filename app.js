const express = require('express');
const app = express();

const server = app.listen(process.env.PORT || 8081, ()=>console.log(`Listening on port ${process.env.PORT || 8080}`));

app.get('/', (req,res)=>{
    res.send(`<h1>Hello Node.js and Express!!!</h1>
              <h4><i>An introduction to server-side scripting</i></h4>
              <a href="/about">About</a>`);
});

app.get('/about', (req, res)=>{
    res.send('Express is a minimal Node.js framework for making server-side application');
})

app.get('/animals/:type', (req, res)=>{
    res.send(`The type of animal you chose is ${req.params.type}`);
})

app.get('/:something', (req, res)=>{
    res.send(`You are trying to access ${req.params.something}`);
})