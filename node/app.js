var express = require('express');
var app = express();

app.listen(80, function () {
    console.log("start! express server");
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
})