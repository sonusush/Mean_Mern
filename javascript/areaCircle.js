function areaCircle(radius)
{
	 var area=Math.PI*radius*radius
	 return area;
}
function perimeterCircle(radius)
{
	var peri=2*Math.PI*radius
	return peri;
}

var radius=parseFloat(prompt("enter the radius"));

var area=areaCircle(radius);
alert("area of circle is" +area);

var perimeter=perimeterCircle(radius);
alert("perimeter of circle is" +perimeter);