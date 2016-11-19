/**
 * Created by sid on 18/11/15.
 */
var express = require('express');
var app = express();
var http = require('http');
var httpServer = http.Server(app);
path = require('path');

var port = 3009;
app.use(express.static(__dirname+'/app'));
app.use('/vendor', express.static(path.join(__dirname, 'vendor')));
app.use('/app', express.static(path.join(__dirname, 'app')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
app.listen(port, function() {
  console.log('Server started on port:'+port);
});
