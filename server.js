////////////////////////////
///     DEPENDENCIES     
////////////////////////////
var express    = require('express');
var bodyParser = require('body-parser');
var request    = require('request');
var firebase   = require('firebase');
var twilio     = require('twilio');
var cors       = require('cors');

var app = express();
var port = process.argv[2] || 8888;

app.use(express.static('public'));
app.use(bodyParser.json());


// app.listen(port, function() {
//     console.log('I\m watching you...', port);
// });

app.listen(port);
console.log('Powering on...', port);
console.log('Paired');


