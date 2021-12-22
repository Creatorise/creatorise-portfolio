const http = require('http');
const path = require('path');

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('express')); // default URL for website

app.use('/', function (req, res) {
    res.send('Hello world!');
    // res.sendFile(path.join(__dirname + '/express/index.html'));
    //__dirname : It will resolve to your project folder.
});

const server = http.createServer(app);

module.exports = server;
