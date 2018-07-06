var data=require("./data/inventory");

function listonBackOrder(res){
    var onorder=data.filter(function(item){
        return item.avail==="onbackorder";
    });
    res.end(JSON.stringify(onorder));
}
module.exports. listonBackOrder= listonBackOrder;