var express=require('express');
var router=express.Router();

var detailscontrol=require('./controllers/detailcontroller');

router.get('/',detailscontrol.rankings);

module.exports= router;
