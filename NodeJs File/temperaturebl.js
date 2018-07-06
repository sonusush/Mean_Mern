function calculateCelcius(fahrenheit)
{
   return fahrenheit*(5/9);
}
function calculateFahrenheit(celcius)
{
    return (celcius+32)*1.8;
}
module.exports.calculateCelcius=calculateCelcius;
module.exports.calculateFahrenheit=calculateFahrenheit;