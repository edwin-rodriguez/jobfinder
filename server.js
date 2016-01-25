var express = require('express');
var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/api/jobs', function(req, res){
  var jobs = [
    {title:'job1', description: 'desc job 1'},
    {title:'job2', description: 'desc job 2'},
    {title:'job3', description: 'desc job 3'},
    {title:'job4', description: 'desc job 4'},
  ];
  res.json(jobs);
});

app.get('*', function(req, res){
  res.render('index');
});

app.listen(process.env.PORT || 3000);
