let detail=require('../models/detail').model;
require('mongoose');
exports.rankings=function(req,res){


//finding OH rankings of physically handicapped candidates
 	detail.find({ph:'OH',All_Seat:''}).sort({
 				Total_M:-1,
 				Int_M:-1,
 				Written_M:-1
 			}).limit(2).exec(function(err,results_OH){
 			if(err) throw err;
 			for(let i=1;i<=results_OH.length;i++)
 			{
 				detail.updateOne({_id:results_OH[i-1].id},{All_Seat:results_OH[i-1].category+'-'+i}).exec(function(){results_OH[i-1].save(rankings());});
 			}
 		});

//  Finding ranking of Blind Category Candidates 
 	detail.find({ph:'HB',All_Seat:''}).sort({
 				Total_M:-1,
 				Int_M:-1,
 				Written_M:-1
 			}).limit(1).exec(function(err,results_HB){
 			if(err) throw err;
 			for(let i=1;i<=results_HB.length;i++)
 			{
 				detail.updateOne({_id:results_HB[i-1].id},{All_Seat:results_HB[i-1].category+'-'+i}).exec(function(){results_HB[i-1].save();});
 			}
 		});

//  Finding rankings of Deaf Category Candidates
 	detail.find({ph:'HD',All_Seat:''}).sort({
 				Total_M:-1,
 				Int_M:-1,
 				Written_M:-1
 			}).limit(1).exec(function(err,results_HD){
 			if(err) throw err;
 			for(let i=1;i<=results_HD.length;i++)
 			{
 				detail.updateOne({_id:results_HD[i-1].id},{All_Seat:results_HD[i-1].category+'-'+i}).exec(function(){results_HD[i-1].save();});
 	       }
 		});

// finding SC ranks
    let sc_ex=1;
 	let sc_f=3;
 	let sc_rest=4;

 	detail.find({
 		        category:'SC',
 		        relax:'Y',
 				ex:'EX',All_Seat:''}).sort({
 				Total_M:-1,
 				Int_M:-1,
 				Written_M:-1
 			}).limit(1).exec(function(err,results_SC_EX){
 			sc_rest=sc_rest+sc_ex-results_SC_EX.length; 
 			if(err) throw err;
 			for(let i=1;i<=results_SC_EX.length;i++)
 			{
 				detail.updateOne({_id:results_SC_EX[i-1].id},{All_Seat:'SC-EX-'+i}).exec(function(){results_SC_EX[i-1].save();});
 	           
 			}
 		});

 	detail.find({
 		        category:'SC',
 		        relax:'Y',
 				gender:'F',
 				All_Seat:''}).sort({
 				Total_M:-1,
 				Int_M:-1,
 				Written_M:-1
 			}).limit(3).exec(function(err,results_SC_F){
 			sc_rest=sc_rest+sc_f-results_SC_F.length;
 			if(err) throw err;
 			for(let i=1;i<=results_SC_F.length;i++)
 			{
 				detail.updateOne({_id:results_SC_F[i-1].id},{All_Seat:'SC-F-'+i}).exec(function(){results_SC_F[i-1].save();});
 	       
 			}
 		});

 	detail.find({
 		        category:'SC',
 		        relax:'Y',
 				All_Seat:''}).sort({
 				Total_M:-1,
 				Int_M:-1,
 				Written_M:-1
 			}).limit(4).exec(function(err,results_SC_REST){
 			if(err) throw err;
 			for(let i=1;i<=results_SC_REST.length;i++)
 			{
 				detail.updateOne({_id:results_SC_REST[i-1].id},{All_Seat:'SC-'+i}).exec(function(){results_SC_REST[i-1].save();});
 			}
 		});
// finding ranks of ST
 			let st_ex=1;
 			let st_f=3;
 			let st_rest=4;
 	        detail.find({
 		        category:'ST',
 		        relax:'Y',
 				ex:'EX',All_Seat:''}).sort({
 				Total_M:-1,
 				Int_M:-1,
 				Written_M:-1
 			}).limit(1).exec(function(err,results_ST_EX){
 			st_rest=st_rest+st_ex-results_ST_EX.length;
 			if(err) throw err;
 			for(let i=1;i<=results_ST_EX.length;i++)
 			{
 				detail.updateOne({_id:results_ST_EX[i-1].id},{All_Seat:'ST-EX-'+i}).exec(function(){results_ST_EX[i-1].save();});
 	           }
 		});

 	        detail.find({
 		        category:'ST',
 		        relax:'Y',
 				gender:'F',
 				All_Seat:''}).sort({
 				Total_M:-1,
 				Int_M:-1,
 				Written_M:-1
 			}).limit(4).exec(function(err,results_ST_F){
 			st_rest=st_rest+st_f-results_ST_F.length;
 			if(err) throw err;
 			for(let i=1;i<=results_ST_F.length;i++)
 			{
 				detail.updateOne({_id:results_ST_F[i-1].id},{All_Seat:'ST-F-'+i}).exec(function(){results_ST_F[i-1].save();});
 			}
 		});

 	        detail.find({
 		        category:'ST',
 		        relax:'Y',
 				All_Seat:''}).sort({
 				Total_M:-1,
 				Int_M:-1,
 				Written_M:-1
 			}).limit(4).exec(function(err,results_ST_REST){
 			if(err) throw err;
 			for(let i=1;i<=results_ST_REST.length;i++)
 			{
 			       detail.updateOne({_id:results_ST_REST[i-1].id},{All_Seat:'ST-'+i}).exec(function(){results_ST_REST[i-1].save();});
 			       console.log(results_ST_REST[i-1]);
 			}
 		});
// finding OBC ranks
 			let obc_ex=1;
 			let obc_f=3;
 			let obc_rest=5;
 		 	detail.find({
 		        category:'OBC',
 		        relax:'Y',
 				ex:'EX'}).sort({
 				Total_M:-1,
 				Int_M:-1,
 				Written_M:-1
 			}).limit(1).exec(function(err,results_OBC_EX){
 			if(err) throw err;
 			obc_rest=obc_rest+obc_ex-results_OBC_EX.length;
 			for(let i=1;i<=results_OBC_EX.length;i++)
 			{
 				let query={_id:results_OBC_EX[i-1].id};
 	           detail.updateOne({_id:results_OBC_EX[i-1].id},{All_Seat:'OBC-EX-'+i}).exec(function(){results_OBC_EX[i-1].save();});
 			}
 		});

            detail.find({
 		        category:'OBC',
 		        relax:'Y',
 				gender:'F',
 				All_Seat:''}).sort({
 				Total_M:-1,
 				Int_M:-1,
 				Written_M:-1
 			}).limit(3).exec(function(err,results_OBC_F){
 			if(err) throw err;
 			for(let i=1;i<=results_OBC_F.length;i++)
 			{
 				obc_rest=obc_rest+obc_f-results_OBC_F.length;
 	           detail.updateOne({_id:results_OBC_F[i-1].id},{All_Seat:'OBC-F-'+i}).exec(function(){results_OBC_F[i-1].save();});
 	          }
 		});

            detail.find({
 		        category:'OBC',
 		        relax:'Y',
 				All_Seat:''}).sort({
 				Total_M:-1,
 				Int_M:-1,
 				Written_M:-1
 			}).limit(4).exec(function(err,results_OBC_REST){
 			if(err) throw err;
 			for(let i=1;i<=results_OBC_REST.length;i++)
 			{
 				let query={_id:results_OBC_REST[i-1]._id};
 	           detail.updateOne({_id:results_OBC_REST[i-1].id},{All_Seat:'OBC-'+i}).exec(function(){results_OBC_REST[i-1].save();});
 			}
 		});

// finding GEN ranks
 			let ex_seats=2;
 			let female_seats=3;
 			let rest_seats=10;
            detail.find({
 		        ex:'EX',
 		        All_Seat:''}).sort({
 				Total_M:-1,
 				Int_M:-1,
 				Written_M:-1
 			}).limit(ex_seats).exec(function(err,results_GEN_EX){
 			rest_seats=rest_seats+ex_seats-results_GEN_EX.length;
 			if(err) throw err;
 			for(let i=1;i<=results_GEN_EX.length;i++)
 			{
 				let query={_id:results_GEN_EX[i-1].id};
 	           detail.updateOne({_id:results_GEN_EX[i-1].id},{All_Seat:'GEN-EX-'+i}).exec(function(){results_GEN_EX[i-1].save();});
 			}
 		});

            detail.find({
 		        gender:'F',
 				All_Seat:''}).sort({
 				Total_M:-1,
 				Int_M:-1,
 				Written_M:-1
 			}).limit(female_seats).exec(function(err,results_GEN_F){
 			rest_seats=rest_seats+female_seats-results_GEN_F.length;
 			if(err) throw err;
 			for(let i=1;i<=results_GEN_F.length;i++)
 			{
 	           detail.updateOne({_id:results_GEN_F[i-1].id},{$set:{All_Seat:'GEN-F-'+i}},{upsert:true}).exec(function(){results_GEN_F[i-1].save();});
 			}
 		});

            detail.find({
 		        All_Seat:''}).sort({
 				Total_M:-1,
 				Int_M:-1,
 				Written_M:-1
 			}).limit(rest_seats).exec(function(err,results_GEN_REST){
 			if(err) throw err;
 			let cnt=0;
 			for(let i=1;i<=results_GEN_REST.length;i++)
 			{
 			   let query={_id:results_GEN_REST[i-1].id};
 	           if(results_GEN_REST[i-1].All_Seat==="")
  	           cnt=cnt+1;
 	           detail.updateOne({_id:results_GEN_REST[i-1].id},{All_Seat:'GEN-'+cnt}).exec(function(){results_GEN_REST[i-1].save();});
  	           
 			}
 		});



// 	Ordering ranks Marks Wise (Descending)

detail.find({}).sort({
		Total_M:-1,
		Int_M:-1,
		Written_M:-1
	}).exec(function(err,ranks_order){
		if(err) throw err;
		res.render('ranklist',{rank_list:ranks_order});
		});

}
		
	


