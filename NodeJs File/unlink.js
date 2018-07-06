var fs=require("fs");

fs.unlink('addcall.txt',function(err)
{
    if(err){
        console.error(err);
    }

    else{
        console.log("File deleted succesfully!");

    }
});