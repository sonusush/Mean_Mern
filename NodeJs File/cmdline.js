var fs=require("fs");
fs.link(process.argv[2],process.argv[3],function(err)

{
    if(err){
        console.error(err);
    }
    else{
        console.log("File copied succesfully");

    }
});