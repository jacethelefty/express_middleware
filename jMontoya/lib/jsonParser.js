var processJson = function(req, res, next) {
  var jsonData ='';
  req.on('data', (data) => {
    jsonData += data;
    console.log(jsonData + "from req on");
  });
  req.on('end', () => {
    try{
      req.body = JSON.parse(jsonData);
      next();
    } catch(e){
      res.status(400).send('invalid json, data was NOT processed');
      res.end();
    }
  });
};

module.exports = processJson;
