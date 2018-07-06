var sum=0;


function add(value)
{
    sum+=value;
    console.log("value:"+value);
}
var a=[process.argv[2],process.argv[3]];
a.forEach(add);
console.log(sum);