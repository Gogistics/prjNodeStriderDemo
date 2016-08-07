var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('Strider/Nodejs Demo');
});

app.get('/user', function(req, res) {
  res.status(200).json({ first_name: 'Alan', last_name: "Tai" });
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;
