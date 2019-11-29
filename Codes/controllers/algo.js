let detail=require('../models/detail').model;
require('mongoose');

exports.rankings=function(req,res){

let OH_Rank=5; //Number of OH category Seats
let HD_Rank=3; //Number of HD category Seats
let HB_Rank=2; //Number of HB category Seats
let SC_EX_Rank=3; //Number of SC EX-ARMY category Seats
let SC_F_Rank=5; //Number of SC FEMALE category Seats
let SC_Rank=7; // Number of SC COMMON TO ALL category Seats
let ST_EX_Rank=3; //Number of  ST EX-ARMY category Seats
let ST_F_Rank=5; //Number of ST FEMALE category Seats
let ST_Rank=7; //Number of ST COMMON TO ALL category Seats
let OBC_EX_Rank=5; //Number of OBC EX-ARMY category Seats
let OBC_F_Rank=7; //Number of OBC FEMALE category Seats
let OBC_Rank=11; //Number of OBC OPEN TO ALL category Seats
let UNR_EX_Rank=8; //Number of Unreserved EX-ARMY Seats
let UNR_F_Rank=12; // Number of Unreserved FEMALE Seats
let UNR_Rank=20; //Number of Unreserved OPEN TO ALL Seats

//FIRST WE SEE IF SEATS ARE GETTING VACANT IN PARTICULAR CATEGORY
//SO THAT WE CAN SEND IT TO OTHER CATEGORIES AS PER THE PROVIDED CRITERION

//WE ARE FINDING IF THERE IS ANY VACANT SEATS LEFT OF OH SO THAT WE SEND IT TO UNR SEATS 
detail.find({ph:'OH',relax:'Y'},function(err,candidates){
if(candidates.length<OH_Rank)
{
	UNR_Rank=UNR_Rank+OH_Rank-candidates.length;
	OH_Rank=candidates.length;
}
});

//WE ARE FINDING IF THERE IS ANY VACANT SEATS LEFT OF HB SO THAT WE SEND IT TO UNR SEATS 
detail.find({ph:'HB',relax:'Y'},function(err,candidates){
if(candidates.length<HB_Rank)
{
	UNR_Rank=UNR_Rank+HB_Rank-candidates.length;
	HB_Rank=candidates.length;
}
});

//WE ARE FINDING IF THERE IS ANY VACANT SEATS LEFT OF HD SO THAT WE SEND IT TO UNR SEATS 
detail.find({ph:'HD',relax:'Y'},function(err,candidates){
if(candidates.length<HD_Rank){
	UNR_Rank=UNR_Rank+HD_Rank-candidates.length;
	HD_Rank=candidates.length;}
});

//WE ARE FINDING IF THERE IS ANY VACANT SEATS LEFT OF SC_EX SO THAT WE SEND IT TO SC_COMMON SEATS 
detail.find({category:'SC',ex:'EX',relax:'Y'},function(err,candidates){
	if(candidates.length<SC_EX_Rank)
{
	SC_Rank=SC_Rank+SC_EX_Rank-candidates.length;
	SC_EX_Rank=candidates.length;
}
});

//WE ARE FINDING IF THERE IS ANY VACANT SEATS LEFT OF SC_F SO THAT WE SEND IT TO SC_COMMON SEATS 
detail.find({category:'SC',gender:'F',relax:'Y'},function(err,candidates){
	if(candidates.length<SC_F_Rank)
{
	SC_Rank=SC_Rank+SC_F_Rank-candidates.length;
	SC_F_Rank=candidates.length;	
}
});

//WE ARE FINDING IF THERE IS ANY VACANT SEATS LEFT OF SC_COMMON SO THAT WE SEND IT TO UNR SEATS 
let SC_RANKED=SC_F_Rank+SC_EX_Rank;

detail.find({category:'SC',relax:'Y'},function(err,all_sc){
SC_RANKED=all_sc.length-SC_RANKED;
if(SC_RANKED<SC_Rank){
UNR_Rank=UNR_Rank+SC_Rank-SC_RANKED;
SC_Rank=SC_Rank-SC_RANKED;}
});

//WE ARE FINDING IF THERE IS ANY VACANT SEATS LEFT OF ST_EX SO THAT WE SEND IT TO ST_COMMON SEATS 
detail.find({category:'ST',ex:'EX',relax:'Y'},function(err,candidates){
	if(candidates.length<ST_EX_Rank)
{
	ST_Rank=ST_Rank+ST_EX_Rank-candidates.length;
	ST_EX_Rank=candidates.length;
}
});

//WE ARE FINDING IF THERE IS ANY VACANT SEATS LEFT OF ST_F SO THAT WE SEND IT TO ST_COMMON SEATS 
detail.find({category:'ST',gender:'F',relax:'Y'},function(err,candidates){
	if(candidates.length<ST_F_Rank)
{
	ST_Rank=ST_Rank+ST_F_Rank-candidates.length;
	ST_F_Rank=candidates.length;	
}
});

//WE ARE FINDING IF THERE IS ANY VACANT SEATS LEFT OF ST_COMMON SO THAT WE SEND IT TO UNR SEATS 
let ST_RANKED=ST_F_Rank+ST_EX_Rank;

detail.find({category:'ST',relax:'Y'},function(err,all_ST){
ST_RANKED=all_ST.length-ST_RANKED;
if(ST_RANKED<ST_Rank){
UNR_Rank=UNR_Rank+ST_Rank-ST_RANKED;
ST_Rank=ST_Rank-ST_RANKED;}
});


//WE ARE FINDING IF THERE IS ANY VACANT SEATS LEFT OF OBC_EX SO THAT WE SEND IT TO OBC_COMMON SEATS 
detail.find({category:'OBC',ex:'EX',relax:'Y'},function(err,candidates){
	if(candidates.length<OBC_EX_Rank)
{
	OBC_Rank=OBC_Rank+OBC_EX_Rank-candidates.length;
	OBC_EX_Rank=candidates.length;
}
});

//WE ARE FINDING IF THERE IS ANY VACANT SEATS LEFT OF OBC_F SO THAT WE SEND IT TO OBC_COMMON SEATS 
detail.find({category:'OBC',gender:'F',relax:'Y'},function(err,candidates){
	if(candidates.length<OBC_F_Rank)
{
	OBC_Rank=OBC_Rank+OBC_F_Rank-candidates.length;
	OBC_F_Rank=candidates.length;	
}
});

//WE ARE FINDING IF THERE IS ANY VACANT SEATS LEFT OF OBC_COMMON SO THAT WE SEND IT TO UNR SEATS 
let OBC_RANKED=OBC_F_Rank+OBC_EX_Rank;

detail.find({category:'OBC',relax:'Y'},function(err,all_OBC){
OBC_RANKED=all_OBC.length-OBC_RANKED;
if(OBC_RANKED<OBC_Rank){
UNR_Rank=UNR_Rank+OBC_Rank-OBC_RANKED;
OBC_Rank=OBC_Rank-OBC_RANKED;}
});

//WE ARE FINDING IF THERE IS ANY VACANT SEATS LEFT OF UNR_EX SO THAT WE SEND IT TO UNR_COMMON SEATS 
detail.find({relax:'N',ex:'EX'},function(err,candidates){
	if(candidates.length<UNR_EX_Rank){
	UNR_Rank=UNR_Rank+UNR_EX_Rank-candidates.length;
    UNR_EX_Rank=candidates.length;}
});

//WE ARE FINDING IF THERE IS ANY VACANT SEATS LEFT OF UNR_F SO THAT WE SEND IT TO UNR_COMMON SEATS 
detail.find({relax:'N',gender:'F'},function(err,candidates){
	if(candidates.length<UNR_F_Rank){
	UNR_Rank=UNR_Rank+UNR_F_Rank-candidates.length;
    UNR_F_Rank=candidates.length;}
});

//Now we will be Calculating the Ranks Using this Algorithm

let ALL_SEAT=OH_Rank+HB_Rank+HD_Rank+SC_EX_Rank+SC_F_Rank+SC_Rank+ST_EX_Rank+ST_F_Rank+ST_Rank+OBC_EX_Rank+OBC_F_Rank+OBC_Rank+UNR_EX_Rank+UNR_F_Rank+UNR_Rank;
let i=0;
let Count_OH=1;
let Count_HB=1;
let Count_HD=1;
let Count_SC_EX=1;
let Count_SC_F=1;
let Count_SC_COMMON=1;
let Count_ST_EX=1;
let Count_ST_F=1;
let Count_ST_COMMON=1;
let Count_OBC_EX=1;
let Count_OBC_F=1;
let Count_OBC_COMMON=1;
let Count_UNR_EX=1;
let Count_UNR_F=1;
let Count_UNR_COMMON=1;

//FIRST OF ALL ARRANGE THE DOCUMENTS OF CANDIDATES BY MARKS

detail.find({}).sort({
	Total_M:-1,
	Written_M:-1,
	Int_M:-1
}).exec(function(err,sorted_list){
if (err) throw err;
while(ALL_SEAT>0 && i<sorted_list.length)
{
console.log(sorted_list[i].category);
if(sorted_list[i].ph==='OH' && sorted_list[i].relax==='Y' && OH_Rank>0)
{
//detail.updateOne({_id:sorted_list[i].id},{$set:{All_Seat:sorted_list[i].category+'-'+Count_OH}});
	sorted_list[i].All_Seat=sorted_list[i].category+' OH-'+Count_OH;
	sorted_list[i].save();
	Count_=Count_OH+1;
	ALL_SEAT=ALL_SEAT-1;
	OH_Rank=OH_Rank-1;}

else if(sorted_list[i].ph==='HB' && sorted_list[i].relax==='Y' && HB_Rank>0)
{
	//detail.updateOne({_id:sorted_list[i].id},{$set:{All_Seat:sorted_list[i].category+'-'+Count_HB}});
	sorted_list[i].All_Seat=sorted_list[i].category+' HB-'+Count_HB;
	sorted_list[i].save();
	Count_HB=Count_HB+1;
	ALL_SEAT=ALL_SEAT-1;
	HB_Rank=HB_Rank-1;}

else if(sorted_list[i].ph==='HD' && sorted_list[i].relax==='Y' && HD_Rank>0)
{
	//detail.updateOne({_id:sorted_list[i].id},{$set:{All_Seat:sorted_list[i].category+'-'+Count_HD}});
	sorted_list[i].All_Seat=sorted_list[i].category+' HD-'+Count_HD;
	sorted_list[i].save();	
	Count_HD=Count_HD+1;
	ALL_SEAT=ALL_SEAT-1;
	HD_Rank=HD_Rank-1;}

else if(sorted_list[i].category==='SC' && sorted_list[i].ex==='EX' && sorted_list[i].relax==='Y' && SC_EX_Rank>0)
{
    //detail.updateOne({_id:sorted_list[i].id},{$set:{All_Seat:'SC-EX-'+Count_SC_EX}});
    sorted_list[i].All_Seat='SC-EX-'+Count_SC_EX;
	sorted_list[i].save();
	Count_SC_EX=Count_SC_EX+1;
	ALL_SEAT=ALL_SEAT-1;
	SC_EX_Rank=SC_EX_Rank-1;}

else if(sorted_list[i].category==='SC' && sorted_list[i].gender==='F' && sorted_list[i].relax==='Y' && SC_F_Rank>0)
{
    //detail.updateOne({_id:sorted_list[i].id},{$set:{All_Seat:'SC-F-'+Count_SC_F}});
    sorted_list[i].All_Seat='SC-F-'+Count_SC_F;
	sorted_list[i].save();	
	Count_SC_F=Count_SC_F+1;
	ALL_SEAT=ALL_SEAT-1;
	SC_F_Rank=SC_F_Rank-1;}

else if(sorted_list[i].category==='SC' && sorted_list[i].relax==='Y' && SC_Rank>0)
{
    //detail.updateOne({_id:sorted_list[i].id},{$set:{All_Seat:'SC-'+Count_SC_COMMON}});
	sorted_list[i].All_Seat='SC-'+Count_SC_COMMON;
	sorted_list[i].save();
	Count_SC_COMMON=Count_SC_COMMON+1;
	ALL_SEAT=ALL_SEAT-1;
	SC_Rank=SC_Rank-1;}

else if(sorted_list[i].category==='ST' && sorted_list[i].ex==='EX' && sorted_list[i].relax==='Y' && ST_EX_Rank>0)
{
    //detail.updateOne({_id:sorted_list[i].id},{$set:{All_Seat:'ST-EX-'+Count_ST_EX}});
	sorted_list[i].All_Seat='ST-EX-'+Count_ST_EX;
	sorted_list[i].save();
	Count_ST_EX=Count_ST_EX+1;
	ALL_SEAT=ALL_SEAT-1;
	ST_EX_Rank=ST_EX_Rank-1;}

else if(sorted_list[i].category==='ST' && sorted_list[i].gender==='F' && sorted_list[i].relax==='Y' && ST_F_Rank>0)
{
    //detail.updateOne({_id:sorted_list[i].id},{$set:{All_Seat:'ST-F-'+Count_ST_F}});
	sorted_list[i].All_Seat='ST-F-'+Count_ST_F;
	sorted_list[i].save();
	Count_ST_F=Count_ST_F+1;
	ALL_SEAT=ALL_SEAT-1;
	ST_F_Rank=ST_F_Rank-1;}

else if(sorted_list[i].category==='ST' && sorted_list[i].relax==='Y' && ST_Rank>0)
{
	//detail.updateOne({_id:sorted_list[i].id},{$set:{All_Seat:'ST-'+Count_ST_COMMON}});
	sorted_list[i].All_Seat='ST-'+Count_ST_COMMON;
	sorted_list[i].save();
	Count_ST_COMMON=Count_ST_COMMON+1;
	ALL_SEAT=ALL_SEAT-1;
	ST_Rank=ST_Rank-1;}

else if(sorted_list[i].category==='OBC' && sorted_list[i].ex==='EX' && sorted_list[i].relax==='Y' && OBC_EX_Rank>0)
{
	//detail.updateOne({_id:sorted_list[i].id},{$set:{All_Seat:'OBC-EX-'+Count_OBC_EX}});
	sorted_list[i].All_Seat='OBC-EX-'+Count_OBC_EX;
	sorted_list[i].save();
	Count_OBC_EX=Count_OBC_EX+1;
	ALL_SEAT=ALL_SEAT-1;
	OBC_EX_Rank=OBC_EX_Rank-1;}	

else if(sorted_list[i].category==='OBC' && sorted_list[i].gender==='F' && sorted_list[i].relax==='Y' && OBC_F_Rank>0)
{
	//detail.updateOne({_id:sorted_list[i].id},{$set:{All_Seat:'OBC-F-'+Count_OBC_F}});
	sorted_list[i].All_Seat='OBC-F-'+Count_OBC_F;
	sorted_list[i].save();
	Count_OBC_F=Count_OBC_F+1;
	ALL_SEAT=ALL_SEAT-1;
	OBC_F_Rank=OBC_F_Rank-1;}

else if(sorted_list[i].category==='OBC' && sorted_list[i].relax==='Y' && OBC_Rank>0)
{
	//detail.updateOne({_id:sorted_list[i].id},{$set:{All_Seat:'OBC-'+Count_OBC_COMMON}});
	sorted_list[i].All_Seat='OBC-'+Count_OBC_COMMON;
	sorted_list[i].save();	
	Count_OBC_COMMON=Count_OBC_COMMON+1;
	ALL_SEAT=ALL_SEAT-1;
	OBC_Rank=OBC_Rank-1;}

else if(sorted_list[i].relax==='Y' && sorted_list[i].All_Seat=='' && sorted_list[i].ex==='EX' && UNR_EX_Rank>0)
{
	//detail.updateOne({_id:sorted_list[i].id},{$set:{All_Seat:'UNR-EX-'+Count_UNR_EX}});
	sorted_list[i].All_Seat='UNR-EX-'+Count_UNR_EX;
	sorted_list[i].save();
	Count_UNR_EX=Count_UNR_EX+1;
	ALL_SEAT=ALL_SEAT-1;
	UNR_EX_Rank=UNR_EX_Rank-1;}	

else if(sorted_list[i].relax==='Y' && sorted_list[i].All_Seat=='' && sorted_list[i].gender==='F' && UNR_F_Rank>0)
{
	//detail.updateOne({_id:sorted_list[i].id},{$set:{All_Seat:'UNR-F-'+Count_UNR_F}});
	sorted_list[i].All_Seat='UNR-F-'+Count_UNR_F;
	sorted_list[i].save();
	Count_UNR_F=Count_UNR_F+1;
	ALL_SEAT=ALL_SEAT-1;
	UNR_F_Rank=UNR_F_Rank-1;}

else if(sorted_list[i].All_Seat=='' && UNR_Rank>0)
{
	//detail.updateOne({_id:sorted_list[i].id},{$set:{All_Seat:'UNR-'+Count_UNR_COMMON}});
	sorted_list[i].All_Seat='UNR-'+Count_UNR_COMMON;
	sorted_list[i].save();
	Count_UNR_COMMON=Count_UNR_COMMON+1;
	ALL_SEAT=ALL_SEAT-1;
	UNR_Rank=UNR_Rank-1;}
console.log(sorted_list[i].All_Seat);
i=i+1;
}
});

detail.find({}).sort({
		Total_M:-1,
	    Written_M:-1,
	    Int_M:-1
	}).exec(function(err,ranks_order){
		if(err) throw err;
		res.render('ranklist',{rank_list:ranks_order});
		});
}