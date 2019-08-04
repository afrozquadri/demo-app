var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World! This application is hosted on Azure kubernetes service!');
});
app.listen(8000, function () {
  console.log('Example "Hello World" app listening on port 8000!');
});
