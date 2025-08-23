const add = function(a, b) {
	return a + b;
};

add(22, 13)

const subtract = function(a, b) {
	return a - b;
};

subtract(45 - 31)

const sum = function(numbers) {
	return numbers.reduce((acc, current) => acc + current, 0);
};

sum([1,2,3])

const multiply = function(numbers) {
  return a * b;
  //or return numbers.reduce((acc, current) => acc * current, 0); 
};

multiply(35, 7)

const power = function(a, b) {
	//return Math.pow(a, b);
	return a ** b;
};

power(5, 3)



const factorial = function(n) {
	let result = 1;
  for (let i = 2; i <= n; i++)
    result *= i;
};

factorial(5)

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
