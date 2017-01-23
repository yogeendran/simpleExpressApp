var express= require('express');
var app=express();
var one=require('./one.js');
var three=require('./one.js');
var port=8000;
var bodyParser = require('body-parser');

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))

//To parse json data
app.use(bodyParser.json())
app.get('/one', function(req,res){
	one.finddata(req,res);
app.post('/three', function(req,res){
	three.finddata(req,res);
});
app.listen(port);
console.log("server started");
