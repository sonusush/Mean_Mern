var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const http=require("http");
const qs=require("querystring");
var far;
http.createServer(function(req,res)
{
    if(req.method=="GET")
    {
        res.end(
           `<!DOCTYPE html>
            <html>
            <body>
            <h1>Temperature_Conversion</h1>
            <form action="/" method="POST">
             <label>Fahrenheit</label>
            <input type="text" id="far" name="far" required/>
            <button>Convert</button>
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
    console.log(obj.far);
    far=parseFloat(obj.far);
    cel=(5/9)*(far-32.0);
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("sample");
        var a=[{Fahrenheit: far, Celcius: cel}];
        dbo.collection("temperature").insert(a, function(err, res) {
            if (err) throw err
            db.close();
          });
        });
    res.end( `<!DOCTYPE html>
    <html>
    <body>
     <h1>Temperature_Conversion</h1>
   <form action="/">
    <label>Fahrenheit</label>
    <input type="text" id="far" name="far" value=${far} required/><br>
    <label>Celcius</label>
    <input type="text" id="celcius" name="celcius" value=${cel} required readonly/>
    <button>Convert</button>
    </form></body></html>`);
});
}}).listen(1000);
console.log("form server listening on port 1000");