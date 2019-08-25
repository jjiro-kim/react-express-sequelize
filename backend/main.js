var express = require('express');
var cors = require('cors');
var app = express();
var router = require('./routes');

// Cross Origin Resource Sharing Open
app.use(cors());

app.use('/', router);

app.listen(3000, function() {
  console.log('Server is up. Server port is 3000');
});
