
var data=require("./data/inventory");
function listInStock(res){
    var instock=data.filter(function(item){
        return item.avail==="Instock";

    });
    res.end(JSON.stringify(instock));
}

module.exports.listInStock=listInStock;