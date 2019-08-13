var mongoose=require('mongoose');
var schema=mongoose.Schema;

var DetailsSchema= new schema(
{
	roll_no:{type:Number,required:true},
	name:{type:String,required:true},
	gender:{type:String,required:true,enum:['F','M'],default:'M'},
	category:{type:String,required:true,enum:['GEN','OBC','SC','ST','UNR'],default:'GEN'},
	ph:{type:String},
	ex:{type:String},
	do:{type:String,required:true,enum:['Y','N'],default:'Y'},
	Written_M:{type:Number,required:true},
	Int_Marks:{type:Number,required:true},
	Total_M:{type:Number,required:true},
	relax:{type:String,required:true,enum:['Y','N'],default:'N'},
	All_Seat:{type:String}
});

exports.model=mongoose.model('Details',DetailsSchema);
