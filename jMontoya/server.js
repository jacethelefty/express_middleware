var express = require('express');
var app = express();
var jsonParser = require(__dirname + '/lib/jsonParser.js');
var fs = require('fs');

app.get('/hello', (req, res) => {
  res.json({msg: 'hello from the other side'});
});

app.post('/hello/:name', (req, res) => {
  res.json({msg: 'Hello ' + req.params.name});
});

app.post('/sendJson', jsonParser, (req, res) => {
  fs.appendFile(__dirname + '/data/file.json', JSON.stringify(req.body) + ', \n' ,
      res.send('json data has been successfully entered')
  );
});

app.get('/resJson', function(req, res) {
  var toReturn = '';
  var sec = fs.createReadStream(__dirname + '/data/file.json');
  sec.on('data', function(data) {
    toReturn += data.toString();
  });
  sec.on('end', function(){
   res.send(toReturn);
  });

});

app.get('/*', (req, res) => {
  res.status(404).json({msg: 'I think youre lost dude'});
});

app.listen(3000, () => {
  console.log('server up');
});
