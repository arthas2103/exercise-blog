var express = require('express');
var app = express();
var router = require('./routes.js');
var mongoose =require('mongoose');
var blog = require("./database.js").blog;
var parser = require('body-parser');
var port = process.env.PORT || 3000


//database connection
mongoose.connect('mongodb://localhost:27017/myblog', function(err){
  if(err) console.error("connection do database could not be established", err.status);
  else console.log("connected to database");
});

app.use(parser.json());

//Static file router
app.use(express.static(__dirname+'/public'));
//Routes are handled by this middleware
app.use('/api',router);

//Basic error handling implemented by this middleware
app.use(function(req, res, next){
  var error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use(function(err, req, res, next){
  res.status(err.status || 500);
  res.json({message:err.status});
});

//server started, message logged
app.listen(port, function(){
  console.log("Server started at port 3000!");
})
