var MongoClient=require('mongodb').MongoClient;
var sort = { empname: 1 };
MongoClient.connect('mongodb://127.0.0.1:27017/database',function(err,db){
    if(err){
        console.log(err)
    }
    var resultSet=db.collection("emp").find().sort(sort).
    toArray(function(err, result) {
    
        if(err) throw err;
        else{
            console.log(result)
        }
       
        db.close();

    });

    
});