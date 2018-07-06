var http=require("http");
var qs=require("querystring");
var celsius;
var fahren;
http.createServer(function(req,res){
    if(req.method=="GET"){
        res.end(`<!DOCTYPE html>
        <html>
         <head>
            <title>Temperature Conversion</title>
        </head>
        <body>
            <form action="/"method="post">
            <label>Fahren</label>
            <input type="text" id="fahren" name="fah"
                placeholder="Fahrenheit temperature" required/>
                <button>Send</button>
            </form>
            </body>
            </html>


        `);

    } else if(req.method=="POST")
    {
        var body="";
        req.on("data",function(chunk){
            body+=chunk;
            console.log("body");
        });
        req.on("end",function(){
            var obj=qs.parse(body);
            console.log(obj.fah);
            fahren=parseFloat(obj.fah);
            celsius= (5/9) * (fahren-32.0);

            res.end(" Fahren= "+fahren+
                  " Celsius= "+celsius);
         });
    }
}).listen(3000);
console.log("Form server listening on port 3000");