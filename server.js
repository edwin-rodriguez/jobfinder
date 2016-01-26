var express = require('express');
var app = express();
var db = require('./jobs-data');

require('./jobs-service')(db, app);

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
  res.render('index');
  
});

app.listen(process.env.PORT || 3000);
