var fs=require("fs");
fs.mkdir('./lib1',function(err,files){
    if(err)
    {
        console.log("error"+err);
    }
    else{
        console.log(files);
    }
})