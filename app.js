const express = require('express');
const app = express();

const server = app.listen(process.env.PORT || 8081, ()=>console.log(`Listening on port ${process.env.PORT || 8080}`));

app.get('/', (req,res)=>{
    res.send(`<h1>Hello Node.js and Express!!!</h1>
              <h4><i>An introduction server-side scripting</i></h4>`)
});


