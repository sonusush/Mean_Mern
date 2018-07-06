var fs=require("fs");
fs.link('input.txt','input-copy.txt',function(err)

{
    if(err){
        console.error(err);
    }
    else{
        console.log("File copied succesfully");

    }
});