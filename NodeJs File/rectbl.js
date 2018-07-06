function calculateArea(length,breadth){
    return length*breadth;
   
}

function calculatePerimeter(length,breadth){
    return 2*(length+breadth);
   
}
module.exports.calculateArea=calculateArea;
module.exports.calculatePerimeter=calculatePerimeter;