const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

app.get('/',  (req,res) => {
    res.send('<h1>Express</h1>');
});

server.listen(3000, function () {
    console.log('server started on port 3000');
});