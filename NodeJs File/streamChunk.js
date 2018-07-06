var fs=require("fs");
var data='';
//create a readable stream
var readerStream=fs.createReadStream('eventEmitter.txt');

//Handle stream events=data,end, and error
readerStream.on('data',function(chunk){
    data +=chunk;//every time data is to be read
    console.log(data);

});

readerStream.on('end',function(){ //at the end again data is fetching
    console.log(data);
});
readerStream.on('error',function(err){
    console.log(err);
});