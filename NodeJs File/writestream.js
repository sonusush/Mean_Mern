var fs=require("fs");
var data='Mean Mern Stack Training';

//create a writable stream
var writerStream=fs.createWriteStream('output.txt');

//write the data to stream
writerStream.write(data);

//Mark the end of file
writerStream.end();

//Handle stream events=finish,and error
writerStream.on('finish',function(){
    console.log("Write completed");
});
writerStream.on('error',function(err){
    console.log(err.stack);

console.log("Program Ended");
});