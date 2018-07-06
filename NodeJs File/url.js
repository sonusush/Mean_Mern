var http=require('http');
var server=http.createServer(function (request,response){
    console.log('request starting....');
    //respond
    console.log('request.method');
    if(request.url =="/hi")
    {
        response.write('hi good morning');
        response.end();
    }
    if(request.url =="/hello")
    {
        response.write(JSON.stringify({usename:"sonu",age:22})); 
        response.end()
    }
   
});
server.listen(3000);//port number
console.log('Server running at http://127.0.0.1:3000/');