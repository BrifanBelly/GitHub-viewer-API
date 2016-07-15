var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = 3000;
var path = require('path');

app.use(express.static(path.resolve(__dirname, 'client')));

app.get('/', function(req, res) {
    res.render('index.html');
});

http.listen(port, function() {
    console.log('SERVER RUNNING... PORT: ' + port);
})