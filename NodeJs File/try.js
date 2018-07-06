var fs=require('fs');
try{
    var data=fs.readFileSync('inputaa.txt');
    console.log("synchronous read:"+data.toString());
}
catch(err){
    console.log("error="+err);

}
console.log("program ended");