var MongoClient=require('mongodb').MongoClient;
var empDoc=[{_id:'e1013',empname:"thanvi",designation:"manager",basicpay:90000},
{_id:'e1012',empname:"thanu",designation:"managerTL",basicpay:10000}];
MongoClient.connect('mongodb://127.0.0.1:27017/database',function(err,db){
    if(err){
        console.log(err)
    }
    db.collection('emp').insertMany(empDoc,function(err,result){
    
        if(err) throw err;
        else{
            console.log("document inserted successfully")
            console.log(result)
        }
       
        db.close();

    });

    
});