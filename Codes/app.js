var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require('mongoose');
var routes=require('./route.js');

var mongoDB='mongodb://localhost:27017/mppsc-ranklist-generator';
mongoose.connect(mongoDB,{useNewUrlParser:true});
var db=mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var app=express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(3000, () => {
	console.log(`Server started at 3000`)
});
