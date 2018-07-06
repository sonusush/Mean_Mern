var product1=require('./pro');
var MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017/database',function(err,db){
    if(err){
        console.log(err)
    }
db.collection('product').find().toArray(function(err,result){
    if(err) throw err;
    console.log(result);
    for(var i=0;i<result.length;i++){
        console.log("TotalAmount="+product1.calculateAmount(result[i].qty,
            result[i].price));
    
    }
});
 db.close();
});
