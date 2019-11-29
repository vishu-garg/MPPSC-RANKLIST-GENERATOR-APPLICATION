var mongoose=require('mongoose');
var schema=mongoose.Schema;

var DetailsSchema= new schema(
{
	roll_no:{type:Number},
	name:{type:String},
	gender:{type:String},
	category:{type:String},
	ph:{type:String},
	ex:{type:String},
	do:{type:String},
	Written_M:{type:Number},
	Int_M:{type:Number},
	Total_M:{type:Number},
	relax:{type:String},
	All_Seat:{type:String}
});

exports.model=mongoose.model('Detail',DetailsSchema);
