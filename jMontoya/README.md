##Description
Create an express middleware function that parses incoming JSON, on a successful parse the JSON object should be saved to req.body and the next function called. On a failed parse the middleware should send back the appropriate status code and a message of "invalid json". Also, the middleware should be tested in both a unit and integration test format.

##How to use

###Start the server: `node server.js`
###se superagent in another tab: `superagent localhost:3000/hello`
###Greet your name: `superagent localhost:3000/hello/janedoe post`


J Montoya
JS401
