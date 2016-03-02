var express = require('express');
var app = express();

var bodyParser = require('body-parser');
    
app.use(bodyParser());



app.get('/',function(req, res){
    res.send("hello world this time from exxpress___ XPUKEEEE");
});

app.get('/test',function(req, res){
    res.send("this is a different route");
});

app.post('/test',function(req, res){
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(3000,function(){
    console.log("app is now running on port 3000");
});

//var http = require('http');

//http.createServer(function(request, response) {
  //  request.on("end", function(){
        
    //    });
      //  response.writeHead(200);
        //response.end('Hello OTK Hanousi');
   
                  
                  
//}).listen(3000);