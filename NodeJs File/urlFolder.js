var http=require("http");
var fs=require("fs");
var path=require("path");

server=http.createServer(function(req,res){
    console.log('${req.method} request for ${req.url}');

if(req.url.match('style.css')){
    var cssPath=path.join(__dirname,'public',req.url);
    var fileStream=fs.createReadStream(cssPath);
    fileStream.pipe(res);
}else if(req.url.match("birds.jpg")){
    var imgPath=path.join(__dirname,'public',req.url);
    var fileStream=fs.createReadStream(imgPath);
    fileStream.pipe(res);
}else{
    res.end("404 File not found");
}

})
server.listen(3000);
console.log("File server running on port 3000");