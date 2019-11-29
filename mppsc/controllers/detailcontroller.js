var detail=require('../models/detail');

exports.rankings=function(req,res){
//finding OH rankings of physically handicapped candidates
	detail.find({ph:'OH'},
		{
			skip:0,
			limit:2,
			sort:{
				Total_M:-1,
				Int_M:-1,
				Written_M:-1
			}
		},

		function(err,results_OH){
			if(err) throw err;
			for(let i=1;i<=results_OH.length;i++)
			{
				var query={roll_no:results_OH[i].roll_no};
	           var rank={$set:{All_Seat:category+'-'+i}};
	           detail.updateOne(query,rank,function(err,res){
	           	if(err)throw err;
	           });
			}
		});

// Finding ranking of Blind Category Candidates 
	detail.find({ph:'HB'},
		{
			skip:0,
			limit:1,
			sort:{
				Total_M:-1,
				Int_M:-1,
				Written_M:-1
			}
		},

		function(err,results_HB){
			if(err) throw err;
			for(let i=1;i<=results_HB.length;i++)
			{
				var query={roll_no:results_HB[i].roll_no};
	           var rank={$set:{All_Seat:category+'-'+i}};
	           detail.updateOne(query,rank,function(err,res){
	           	if(err)throw err;
	           });
			}
		});

// Finding rankings of Deaf Category Candidates
	detail.find({ph:'HD'},
		{
			skip:0,
			limit:1,
			sort:{
				Total_M:-1,
				Int_M:-1,
				Written_M:-1
			}
		},

		function(err,results_HD){
			if(err) throw err;
			for(let i=1;i<=results_HD.length;i++)
			{
				var query={roll_no:results_HD[i].roll_no};
	           var rank={$set:{All_Seat:category+'-'+i}};
	           detail.updateOne(query,rank,function(err,res){
	           	if(err)throw err;
	           });
			}
		});

//finding SC ranks
	detail.find({
		category:'SC',
		relax:'Y'},
		function(err,all_sc){
			let sc_ex=1;
			let sc_f=3;
			let sc_rest=4;
			if(err) throw err;
			all_sc.find({
				ex:'EX'},
				{
			skip:0,
			limit:1,
			sort:{
				Total_M:-1,
				Int_M:-1,
				Written_M:-1
			}},
			function(err,results_SC_EX){
			sc_rest=sc_rest+sc_ex-results_SC_EX.length; 
			if(err) throw err;
			for(let i=1;i<=results_SC_EX.length;i++)
			{
				var query={roll_no:results_SC_EX[i].roll_no};
	           var rank={$set:{All_Seat:'SC-EX-'+i}};
	           all_Sc.updateOne(query,rank,function(err,res){
	           	if(err)throw err;
	           });
			}
		});

			all_sc.find({
				gender:'F',
				All_Seat:''},
				{
			skip:0,
			limit:3,
			sort:{
				Total_M:-1,
				Int_M:-1,
				Written_M:-1
			}},
			function(err,results_SC_F){
			sc_rest=sc_rest+sc_f-results_SC_F.length;
			if(err) throw err;
			for(let i=1;i<=results_SC_F.length;i++)
			{
				var query={roll_no:results_SC_F[i].roll_no};
	           var rank={$set:{All_Seat:'SC-F-'+i}};
	           all_sc.updateOne(query,rank,function(err,res){
	           	if(err)throw err;
	           });
			}
		});

			all_sc.find({
				All_Seat:''},
				{
			skip:0,
			limit:4,
			sort:{
				Total_M:-1,
				Int_M:-1,
				Written_M:-1
			}},
			function(err,results_SC_REST){
			if(err) throw err;
			for(let i=1;i<=results_SC_REST.length;i++)
			{
				var query={roll_no:results_SC_REST[i].roll_no};
	           var rank={$set:{All_Seat:'SC-'+i}};
	           all_sc.updateOne(query,rank,function(err,res){
	           	if(err)throw err;
	           });
			}
		});
		});
//finding ranks of ST
	detail.find({
		category:'ST',
		relax:'Y'},
		function(err,all_st){
			let st_ex=1;
			let st_f=3;
			let st_rest=4;
			if(err) throw err;
			all_st.find({
				ex:'EX'},
				{
			skip:0,
			limit:1,
			sort:{
				Total_M:-1,
				Int_M:-1,
				Written_M:-1
			}},
			function(err,results_ST_EX){
			st_rest=st_rest+st_ex-results_ST_EX.length;
			if(err) throw err;
			for(let i=1;i<=results_ST_EX.length;i++)
			{
				var query={roll_no:results_ST_EX[i].roll_no};
	           var rank={$set:{All_Seat:'ST-EX-'+i}};
	           all_st.updateOne(query,rank,function(err,res){
	           	if(err)throw err;
	           });
			}
		});

			all_st.find({
				gender:'F',
				All_Seat:''},
				{
			skip:0,
			limit:3,
			sort:{
				Total_M:-1,
				Int_M:-1,
				Written_M:-1
			}},
			function(err,results_ST_F){
			st_rest=st_rest+st_f-results_ST_F.length;
			if(err) throw err;
			for(let i=1;i<=results_ST_F.length;i++)
			{
				var query={roll_no:results_ST_F[i].roll_no};
	           var rank={$set:{All_Seat:'ST-F-'+i}};
	           all_st.updateOne(query,rank,function(err,res){
	           	if(err)throw err;
	           });
			}
		});

			all_st.find({
				All_Seat:''},
				{
			skip:0,
			limit:4,
			sort:{
				Total_M:-1,
				Int_M:-1,
				Written_M:-1
			}},
			function(err,results_ST_REST){
			if(err) throw err;
			for(let i=1;i<=results_ST_REST.length;i++)
			{
				var query={roll_no:results_ST_REST[i].roll_no};
	           var rank={$set:{All_Seat:'ST-'+i}};
	           all_st.updateOne(query,rank,function(err,res){
	           	if(err)throw err;
	           });
			}
		});
		});
//finding OBC ranks
	detail.find({
		category:'OBC',
		relax:'Y'},
		function(err,all_OBC){
			let obc_ex=1;
			let obc_f=3;
			let obc_rest=5;
			if(err) throw err;
			all_OBC.find({
				ex:'EX'},
				{
			skip:0,
			limit:1,
			sort:{
				Total_M:-1,
				Int_M:-1,
				Written_M:-1
			}},
			function(err,results_OBC_EX){
			if(err) throw err;
			obc_rest=obc_rest+obc_ex-results_OBC_EX.length;
			for(let i=1;i<=results_OBC_EX.length;i++)
			{
				var query={roll_no:results_OBC_EX[i].roll_no};
	           var rank={$set:{All_Seat:'OBC-EX-'+i}};
	           all_OBC.updateOne(query,rank,function(err,res){
	           	if(err)throw err;
	           });
			}
		});

			all_OBC.find({
				gender:'F',
				All_Seat:''},
				{
			skip:0,
			limit:3,
			sort:{
				Total_M:-1,
				Int_M:-1,
				Written_M:-1
			}},
			function(err,results_OBC_F){
			if(err) throw err;
			for(let i=1;i<=results_OBC_F.length;i++)
			{
				obc_rest=obc_rest+obc_f-results_OBC_F.length;
				var query={roll_no:results_OBC_F[i].roll_no};
	           var rank={$set:{All_Seat:'OBC-F-'+i}};
	           all_OBC.updateOne(query,rank,function(err,res){
	           	if(err)throw err;
	           });
			}
		});

			all_OBC.find({
				All_Seat:''},
				{
			skip:0,
			limit:4,
			sort:{
				Total_M:-1,
				Int_M:-1,
				Written_M:-1
			}},
			function(err,results_OBC_REST){
			if(err) throw err;
			for(let i=1;i<=results_OBC_REST.length;i++)
			{
				var query={roll_no:results_OBC_REST[i].roll_no};
	           var rank={$set:{All_Seat:'OBC-'+i}};
	           all_OBC.updateOne(query,rank,function(err,res){
	           	if(err)throw err;
	           });
			}
		});
		});

//finding GEN ranks
	detail.find({
		category:'GEN',
		relax:'Y'},
		function(err,all_GEN){
			let ex_seats=2;
			let female_seats=3;
			let rest_seats=10;
			if(err) throw err;
			all_GEN.find({
				ex:'EX'},
				{
			skip:0,
			limit:ex_seats,
			sort:{
				Total_M:-1,
				Int_M:-1,
				Written_M:-1
			}},
			function(err,results_GEN_EX){
			rest_seats=rest_seats+ex_seats-results_GEN_EX.length;
			if(err) throw err;
			for(let i=1;i<=results_GEN_EX.length;i++)
			{
				var query={roll_no:results_GEN_EX[i].roll_no};
	           var rank={$set:{All_Seat:'GEN-EX-'+i}};
	           all_GEN.updateOne(query,rank,function(err,res){
	           	if(err)throw err;
	           });
			}
		});

			all_GEN.find({
				gender:'F',
				All_Seat:''},
				{
			skip:0,
			limit:female_seats,
			sort:{
				Total_M:-1,
				Int_M:-1,
				Written_M:-1
			}},
			function(err,results_GEN_F){
			rest_seats=rest_seats+female_seats-results_GEN_F.length;
			if(err) throw err;
			for(let i=1;i<=results_GEN_F.length;i++)
			{
				var query={roll_no:results_GEN_F[i].roll_no};
	           var rank={$set:{All_Seat:'GEN-F-'+i}};
	           all_GEN.updateOne(query,rank,function(err,res){
	           	if(err)throw err;
	           });
			}
		});

			all_GEN.find({
				All_Seat:''},
				{
			skip:0,
			limit:rest_seats,
			sort:{
				Total_M:-1,
				Int_M:-1,
				Written_M:-1
			}},
			function(err,results_GEN_REST){
			if(err) throw err;
			for(let i=1;i<=results_GEN_REST.length;i++)
			{
				var query={roll_no:results_GEN_REST[i].roll_no};
	           var rank={$set:{All_Seat:'GEN-'+i}};
	           all_GEN.updateOne(query,rank,function(err,res){
	           	if(err)throw err;
	           });
			}
		});
		});

// 	Ordering ranks Marks Wise (Descending)
detail.find({},
   {
	sort:{
		Total_M:-1,
		Int_M:-1,
		Written_M:-1
	}},
	function(err,ranks_order){
		if(err) throw err;
		res.render('rank_list',{rank_list:ranks_order});
		});
};


		
	


