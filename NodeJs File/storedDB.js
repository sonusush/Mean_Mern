var MongoClient =require('mongodb').MongoClient;
const http=require("http");
const qs=require("querystring");
var NetSalary;
var NetPay=require('./NetPayBL.js');

http.createServer(function(req,res)
{
    if(req.method=="GET")
    {
        res.end(
           `<!DOCTYPE html>
            <html>
            <body>
            <h1>Employee Details</h1>
            <form action="/" method="POST">
             <label>Employee ID</label>
            <input type="text" id="empID" name="empID" required/><br>
            <label>Employee Name</label>
            <input type="text" id="empName" name="empName" required/><br>
            <label>Basic Pay</label>
            <input type="text" id="basicPay" name="basicPay" required/><br>
            <button>SUBMIT</button>
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
var empID=(obj.empID)
var empName=(obj.empName)
    basicPay=parseFloat(obj.basicPay);
NetSalary=NetPay.calculateNetPay(basicPay);
   
MongoClient.connect('mongodb://127.0.0.1:27017/EmployeeManagement',function(err,db){
    if(err){
        console.log(err)

        }
        var array=[{empID:empID,employeeName:empName,basicPay:basicPay,netSalary:NetSalary}]
        db.collection('employees').insert(array
            ,function(err,result){
                if(err) throw err;
                console.log(result);
        
        db.close()
        });
        })
        res.end( `<!DOCTYPE html>
    <html>
    <body>
     <h1>SUBMIT SUCCESFULLY</h1>
     </body>
     </html>`
    )
    })
}}).listen(3000)

console.log("form server listening on port 3000");