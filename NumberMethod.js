//to string()--Returns a number as a string
let x=123;
x.toString();
(123).toString()
console.log(typeof(x.toString()));

//ToExponential() Method-- Returns a  with a number rounded using exponential notation
let y=89.2312
console.log(y.toExponential(2)); //rounds to the parameter provided


//toFixed () Method--Returns a string with a number to a specified number of decimals 
console.log(y.toFixed(0));

//toPrecision()-- returns a string with a number written with a specified length
console.log(y.toPrecision(3)); 

//valueOf()--Returns a number as anumber
console.log((x+y).valueOf());

//Number()--Converts to a number
console.log(Number(true));
console.log(Number ('2000'));

 //Number method used on dates
 console.log(Number(new Date("26-06-2002")));
 console.log(Number(new Date("1970-01-02")))

 //The parseInt() Method--parses a string and returns a whole number, . Spaces are allowed. Only the first number is returned:
console.log(parseInt("-10")); 

//parseFloat() Method-- parses a string and returns a number
console.log(parseFloat("10 years"));

//Number Object Method

//Number.isInteger()--- returns true if an arguement is int
console.log(Number.isInteger(10),
Number.isInteger(10.5), Number.isInteger('HELLLO')
);

//Number.isSafeInteger() Method
//A safe integer is an integer that can be exactly represented as a double precision number.
//The Number.isSafeInteger() method returns true if the argument is a safe integer.
console.log(Number.isSafeInteger(10),
Number.isSafeInteger(12345678901234567890));
console.log(Number.isSafeInteger(y));

let safeInteger = 9007199254740991;
console.log(safeInteger); // Output: 9007199254740991


//The Number.parseFloat() Method
// Number.parseFloat() parses a string and returns a number.
// Spaces are allowed. Only the first number is returned:
console.log(Number.parseFloat('10.22'));
console.log(Number.parseFloat('10'));
console.log(Number.parseInt('10'));

