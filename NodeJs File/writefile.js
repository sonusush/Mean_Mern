var fs=require("fs");
console.log("Before writing");
fs.writeFile('output.txt','Dare to win,dare to do',function(err){
if(err){
    return console.error(err);

}
console.log("Data written succesfully");
console.log("Reading written data");
fs.readFile('output.txt',function(err,data){
    if(err){
        return console.error(err);
    
    }
    console.log("Asynchronous read:"+data.toString());


});
});

    



