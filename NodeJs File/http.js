var http=require('http');
var server=http.createServer(function (request,response){
    console.log('request starting....');
    //respond
   // response.write('hello client!');

    response.write('hi pruthvi');
    response.end();

});

server.listen(3000);//port number
console.log('Server running at http://172.29.120.247:3000/');