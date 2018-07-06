var MongoClient=require('mongodb').MongoClient;
//var findQuery={_id:'e1001'};
MongoClient.connect('mongodb://127.0.0.1:27017/database',function(err,db){
    if(err){
        console.log(err)
    }
else{
    var resultSet=db.collection('emp').find();
    resultSet.each(function (err,doc){
        console.log(doc);
    }
    )}
db.close();
    
});