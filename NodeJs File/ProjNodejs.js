var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const http=require("http");
const qs=require("querystring");
var sa=require('./calculateNetPay.js');
var far;
http.createServer(function(req,res)
{
    if(req.method=="GET")
    {
        res.end(`
            <!DOCTYPE html>
             <html>
             <body>
             <h1>Employee_Details</h1>
             <form action="/" method="POST">
              <label>EmployeeID</label>
             <input type="text" id="empid" name="empid" required/>

             <label>EmpName</label>
             <input type="text" id="empname" name="empname" required/>

             <label>BasicPay</label>
             <input type="text" id="pay" name="pay" required/>

             <button>Calculate</button>
             </form></body></html>`);

            
        }
        else if(req.method=="POST")
        {
            var body="";
            req.on("data",function(chunk)
        {
            body+=chunk;
           console.log("data");
        });
        req.on("end",function()
    {
        var obj=qs.parse(body);
        console.log(obj.pay);
        var id=parseInt(obj.empid);
        var Name=(obj.empname);
        far=parseFloat(obj.sa);
        var res=sa.paysalary(far);
   // console.log(res);

    
        res.end(`<!DOCTYPE html>
        <html>
        <body>
         <h1>Employee_Details</h1>
       <form action="/" method ="POST">
       <label>EmployeeID</label>
       <input type="text" id="empid" name="empid" value=${Name} required/>

       <label>EmpName</label>
       <input type="text" id="empname" name="empname" value=${id} required/>

        <label>BasicPay</label>
        <input type="text" id="pay" name="pay" value=${far} required/><br>  

        <label>NetPay</label>
        <input type="text" id="netpay" name="netpay" value=${res} 
        required readonly/>

        <button>Convert</button>
        </form></body></html>`);

        
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("sample");
            var a=[{EmployeeID: empid,EmpName:empname,BasicPay:pay,NetPay:netpay}];
            dbo.collection("empdetails").insert(a, function(err, res) {
                if (err) throw err
                db.close();
              });
            });
        });
    }
    
}).listen(1000);
    console.log("form server listening on port 1000");