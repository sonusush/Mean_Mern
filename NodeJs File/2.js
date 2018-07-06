var NetPay=require('./NetPayBL.js');
const http=require("http");
const qs=require("querystring");
var NetSalary;

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
            <button>Calculate NetPay</button><br>
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

    res.end( `<!DOCTYPE html>
    <html>
    <body>
     <h1>Employee Details</h1>
   <form action="/">
    <label>Employee ID</label>
    <input type="text" id="empID" name="empID" value=${empID} required/><br>
    <label>Employee Name</label>
    <input type="text" id="empName" name="empName" value=${empName} required readonly/><br>
    <label>Basic Pay</label>
    <input type="text" id="basicPay" name="basicPay" value=${basicPay} required readonly/><br>
    <button>Calculate NetPay</button>
    <label>NetPay</label>
    <input type="text" id="netpay" name="celcius" value=${NetSalary} required readonly/>
   
    </form></body></html>`);
});
}}).listen(3000);


console.log("form server listening on port 3000");