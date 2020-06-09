const express = require('express');
const app = express();


// app.use() here
var requestTime = function (req, res, next) {
    var ladate = new Date()
    req.requestTime = (ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear());
    next();
  };
  
  app.use(requestTime);

  let counter = 0

  app.get("/count-me", (req, res, next) => {
       counter+=1
       res.send(`La page a été vistée ${counter} fois `); 
});

  app.get('/', function (req, res) {
    var responseText = 'Hello World!';
    responseText += 'Requested at: ' + req.requestTime + '';
    res.send(responseText);
  });
  
  app.listen(3000);
  
