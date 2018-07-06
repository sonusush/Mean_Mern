var MongoClient =require('mongodb').MongoClient;
const http=require("http");
const qs=require("querystring");


http.createServer(function(req,res)
{
    if(req.method=="GET")
    {
        res.end(
           `<!DOCTYPE html>
            <html>
            <body>
            <h1>Amount for Update</h1>
            <form action="/" method="POST">
             <label>Enter the Amount</label>
            <input type="text" id="amount" name="amount" required/><br>
            
            <button>UPDATE</button>
            </form></body></html>`
             );
    }
    else if(req.method=="POST")
    {
        var body="";
        req.on("data",function(p)
    {
        body+=p;
//        console.log("data");
    });
    req.on("end",function()
{
    var obj=qs.parse(body);
    
var amount=parseInt(obj.amount);
   
MongoClient.connect('mongodb://127.0.0.1:27017/EmployeeManagement',function(err,db){
    if(err){
        console.log(err)

        }
   
        db.collection('employees').update({},{$inc:{basicPay:amount}},{multi:true}
            ,function(err,result){
                if(err) throw err;
                console.log(result);
                res.end(   `<!DOCTYPE html>
        <html>
        <body>
        <h1>Updated Succesfully</h1>
        </body></html>`
    )
        
        db.close()
        });
        })
        
    })
}}).listen(3000)

console.log("form server listening on port 3000");