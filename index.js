var express = require('express');
var app = express();

app.use("/data", express.static(__dirname + '/data'));

app.get('/', function(req,res) { //la diagonal significa raiz
    res.sendFile(__dirname + '/index.html');
}); 

app.listen(8080);
       
       
       