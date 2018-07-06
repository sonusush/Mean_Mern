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
            <h1>Employee Details</h1>
            <form action="/" method="POST">
             <label>Employee ID</label>
            <input type="text" id="empID" name="empID" required/>
            <label>Employee Name</label>
            <input type="text" id="empName" name="empName" required/>
            <label>Basic Pay</label>
            <input type="text" id="basicPay" name="basicPay" required/>
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
var objString=JSON.stringify(obj);


        res.end( `<!DOCTYPE html>
    <html>
    <body>
     <h1>SUBMIT SUCCESFULLY</h1>
     <p> ${objString} <p>
     </body>
     </html>`
    )
    })
}}).listen(3000)