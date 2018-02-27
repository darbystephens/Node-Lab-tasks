var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var tasks = require("./tasks");
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use("/", tasks);

var server = app.listen(3000, function() {
var port = server.address().port;
console.log("Express server is up and running.");
});
