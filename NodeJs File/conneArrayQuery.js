var MongoClient=require('mongodb').MongoClient;
var findQuery={_id:'e1002'};
MongoClient.connect('mongodb://127.0.0.1:27017/database',function(err,db){
    if(err){
        console.log(err)
    }
    db.collection('emp').find(findQuery,{_id:0,empname:1}).
    toArray(function(err,result){
        if(err) throw err;
        console.log(result);
    

    });
db.close();
    
});