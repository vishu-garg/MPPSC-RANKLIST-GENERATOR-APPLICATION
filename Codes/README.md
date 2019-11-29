# MPPSC-RANKLIST-GENERATOR-APPLICATION
 A application based on Express and Electron , generates the ranklist of MPPSC candidates,based on all necessary provisions including aarakshan criteria.
 
Database:
The details of candidates are needed to be filled in a MongoDB database.The Database name is to be:mppsc-ranklist-generator
                                                                        The collection name is to be:details

Fill the details as given in the json format below:
Example of Schema details:
{"_id":{"$oid":"5d6e29b53afb68050861f38d"},"roll_no":"192653","name":"SAMPADA","gender":"F","category":"GEN","ph":"","ex":"","do":"Y","Written_M":{"$numberInt":"850"},"Int_M":{"$numberInt":"150"},"Total_M":{"$numberInt":"1000"},"relax":"N","All_Seat":"UNR-F-1"}

{"_id":{"$oid":"5d6e2afffa47be0508ec2252"},"roll_no":"171512","name":"SHIV AGARWAL","gender":"M","category":"GEN","ph":"","ex":"","do":"Y","Written_M":{"$numberInt":"851"},"Int_M":{"$numberInt":"138"},"Total_M":{"$numberInt":"989"},"relax":"N","All_Seat":"UNR-1"}

{"_id":{"$oid":"5d6e2b58fa47be0508ec2253"},"roll_no":"275831","name":"JUHI GUPTA","gender":"M","category":"GEN","ph":"","ex":"","do":"N","Written_M":{"$numberInt":"840"},"Int_M":{"$numberInt":"149"},"Total_M":{"$numberInt":"989"},"relax":"N","All_Seat":"UNR-2"}


Next we need to run the server-
In case of local server you need to have npm installed.Install all the depecdencies then run the command "npm start" (make sure that mongodb server is running in case if you are running Mongo locally.)

The server will display the message "Server started at port 3000"


Now you can  run either a Web application by going to localhost:3000
OR 
You can also run this as application by opening the file APP.exe in APP-win32-x64 folder.

Thanks....
