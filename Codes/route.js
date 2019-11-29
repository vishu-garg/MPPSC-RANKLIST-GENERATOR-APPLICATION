var express=require('express');
var router=express.Router();

var welcomepage=require('./controllers/welcoomepage');
var algo=require('./controllers/algo');

router.get('/',welcomepage.show);
router.get('/ranklist',algo.rankings);

module.exports= router;
