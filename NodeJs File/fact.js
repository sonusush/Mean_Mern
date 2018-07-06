function factorial (n){
   
    var fact=1;
    for(var i=1;i<=n;i++){
        fact*=i;
    }
    
    return fact;

}
console.log(factorial(5));
module.exports.f1=factorial;