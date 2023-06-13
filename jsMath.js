//Allows to perform mathematical tasks on numbers
console.log(Math.PI);
console.log(Math.SQRT2);
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E

//Math.round(x)	Returns x rounded to its nearest integer
console.log(Math.round(2.45));

console.log(Math.random());
console.log(Math.floor(Math.random() * 11));
// Math.ceil(x)	Returns x rounded up to its nearest integer
console.log(Math.ceil(2.45));
// Math.floor(x)Returns x rounded down to its nearest integer
console.log(Math.floor(2.45));

// Math.trunc(x)	Returns the integer part of x
console.log(Math.trunc(2.45));
console.log(Math.trunc(-4.2));

//Math.sign(x) returns if x is negative, null or positive:
console.log(Math.sign(-6));
console.log(Math.sign(6));

//Math.pow(x, y) returns the value of x to the power of y:
console.log(Math.pow(2,3));

//Math.sqrt()
// Math.sqrt(x) returns the square root of x:
console.log(Math.sqrt(100));

//Math.exp()--returns number written as an exponent
console.log(Math.exp(100));

//Math.abs(x) returns the absolute (positive) value of x:

console.log(Math.abs(-4.7));

//Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).
// If you want to use degrees instead of radians, you have to convert degrees to radians:
// Angle in radians = Angle in degrees x PI / 180.
console.log(Math.sin(90 * Math.PI/180));

console.log(Math.min(1,23,4,5,6,7));
console.log(Math.max(1,23,4,5,6,7));

//Math.log(x) returns the natural logarithm of x.
console.log(Math.log(2));

//Math.log10(x) returns the base 10 logarithm of x.
// How many times must we multiply 10 to get 1000?
console.log(Math.log10(1000));




