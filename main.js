var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.render('index')
});

app.listen(8010, function() {
  console.log('Node app is running on port ' + 8010);
});