var fs=require("fs");
// create a readable stream
var readerStream=fs.createReadStream('input.txt');

//create a writable stream
var writerStream=fs.createWriteStream('output.txt');

//pipe the read and write operations
//read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("program ended");