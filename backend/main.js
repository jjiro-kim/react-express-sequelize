var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = require('./routes');

// Cross Origin Resource Sharing Open
console.log(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', router);

app.listen(3000, function() {
  console.log('Server is up. Server port is 3000');
});
