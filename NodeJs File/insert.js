var MongoClient=require('mongodb').MongoClient;
var empDoc={_id:'e1011',empname:"thanvi",designation:"manager",basicpay:90000}
MongoClient.connect('mongodb://127.0.0.1:27017/database',function(err,db){
    if(err){
        console.log(err)
    }
    var resultSet=db.collection('emp').insert(empDoc,function(err,result){
    
        if(err) throw err;
        else{
            console.log("document inserted successfully")
            console.log(result)
        }
       
        db.close();

    });

    
});