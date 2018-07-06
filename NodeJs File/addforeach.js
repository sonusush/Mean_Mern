var sum=0;


function add(value)
{
    sum+=value;
    console.log("value:"+value);
}
var a=[10,20,20];
a.forEach(add);
console.log(sum);