var fs=require("fs");
fs.readFile('input.txt',function(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log("Asynchrous read:"+data.toString());

    }
});
//console.log("program ended");