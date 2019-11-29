var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require('mongoose');
var http=require('http');
var routes=require('./route.js');

var mongoDB='mongodb://localhost:27017/mppsc1234';
mongoose.connect(mongoDB,{useNewUrlParser:true});
var db=mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var app=express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var server = http.createServer((function(req,res){
	app.use('/',routes);
}));
server.listen(3005);
