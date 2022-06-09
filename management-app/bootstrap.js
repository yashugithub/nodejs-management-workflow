
/*
* This file is the initial page for to start the express server.
* This will Initiate all the backend server and expose the rest API's
*/
const path = require("path");
const express = require('express');
const bodyParser = require("body-parser");
const router = require('./apirouter')

const app = express();

//1. Define the express middleware to parse the request.
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//2. Define CORS

//3. Define Rest apis
app.use('/api', router);

app.use(express.static(path.join(__dirname, 'build')));
// Bundle reactjs ui into express server
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//4. Start express Server
const PORT = 4000;
const HOST = 'localhost';

console.log('Management application running on 4000 port!!')
app.listen(PORT);

