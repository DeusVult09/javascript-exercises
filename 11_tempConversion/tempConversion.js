const convertToCelsius = function(Fahrenheit) {
  let celsius = Math.floor((Fahrenheit - 32) / 1.8);
  return Math.round((celsius * 10) / 10);
};

alert('Temperature according to Celsius is: ' + convertToCelsius(132));


const convertToFahrenheit = function(Celsius) {
  let fahrenheit = ((Celsius * 1.8) + 32);
  return Math.round((fahrenheit * 10) / 10);
};

alert('Temperature according to Fahrenheit is: ' + convertToFahrenheit(27));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
