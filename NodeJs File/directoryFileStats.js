var fs=require("fs");
var path=require("path");
fs.readdir('.',function(err,files){
    if(err){
        console.log("error msg is "+err);
    }
    else
    {
        files.forEach(function(fileName){
            console.log(fileName);
            var file=path.join(__dirname,fileName);
            var stats=fs.statSync(file);
            if(stats.isFile()){
                console.log("Regular file");
            }
            else if(stats.isDirectory()){
                console.log("Regular file");
            }
            
        });
            
        
    }
});