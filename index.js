/**
 * Created by sid on 18/11/15.
 */
var express = require('express');
var app = express();
var http = require('http');
var httpServer = http.Server(app);

app.use(express.static(__dirname+'/app'));

app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html');
});
app.listen(3000);
