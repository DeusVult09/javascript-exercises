const add = function(a, b) {
	return a + b;
};


const subtract = function(a, b) {
	return a - b;
};


const sum = function(numbers) {
	return numbers.reduce((acc, current) => acc + current, 0);
};


const multiply = function(numbers) {
  //return a * b;
  return numbers.reduce((acc, current) => acc * current, 0); 
};


const power = function(a, b) {
	//return Math.pow(a, b);
	return a ** b;
};


const factorial = function(n) {
	let result = 1;
  for (let i = 2; i <= n; i++)
    result *= i;
};



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
