var express = require('express');
var cors = require('cors');
var app = express();
var member = require('./routes/member/member');

// Cross Origin Resource Sharing Open
app.use(cors());

app.use('/member', member);

app.listen(3000, function() {
  console.log('Server is up. Server port is 3000');
});
