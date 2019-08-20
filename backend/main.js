var express = require('express');
var cors = require('cors');
var app = express();
var user = require('./routes/user');

app.use(cors());

app.use('/user', user);

app.listen(3000, function() {
  console.log('Server is up. Server port is 3000')
});
