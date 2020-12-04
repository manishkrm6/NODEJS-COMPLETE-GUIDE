const http = require('http');
const express = require('express');

const app = express();


//console.log(app);

app.use( (req,res,next) => {
    console.log("I am in the Middleware");
    next();
});

app.use( (req,res,next) => {
    console.log("I am another Middleware");
    res.send("<h1>Hello Express Js!");
});

app.listen(3000);

/*const server = http.createServer(app);
server.listen(3000);*/



