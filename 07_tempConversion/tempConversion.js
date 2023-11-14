const convertToCelsius = function(far) {
  let celsius = (far -32)* ( 5/9 ) ;
  celsius = Math.round(celsius*10)/10;
  return celsius;
};

console.log(convertToCelsius(-100));

const convertToFahrenheit = function(cel) {
  let fahrenheit = ( cel * (9/5) + 32 );
  fahrenheit = Math.round(fahrenheit*10)/10;
  return fahrenheit;
};

console.log(convertToFahrenheit(-10));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
