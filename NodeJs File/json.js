var http=require("http");
var stock=require('./stockimport.js');
var order=require('./onorder.js');
var data=require("./data/inventory");
http.createServer(function(req,res){
    if(req.url==="/"){
        res.end(JSON.stringify(data));
    } else if(req.url==="/Instock"){
        stock.listInStock(res);

    }else if(req.url==="/onbackorder"){
        order.listonBackOrder(res);
    }else{
        res.end("404 Error.....Data not found");
    }

}).listen(3000);
console.log("Server listening on port 3000");

