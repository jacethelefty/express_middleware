var express = require('express');
var app = express();

app.get('/hello', (req, res) => {
  res.json({msg: 'hello from the other side'});
});

app.get('/*', (req, res) => {
  res.status(404).json({msg: 'I think youre lost dude'});
});

app.post('/hello/:name', (req, res) => {
  res.json({msg: 'Hello ' + req.params.name});
});

app.listen(3000, () => {
  console.log('server up');
});
