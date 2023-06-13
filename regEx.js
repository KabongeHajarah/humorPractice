//A regular expression is a sequence of characters that forms a search pattern.

//The search() method uses an expression to search for a match, and returns the position of the match.
let text= 'Visit my home'
let searchn= text.search('my')
console.log(searchn);

//Using String search() With a Regular Expression
let searchExp=text.search(/home/i)
console.log(searchExp);

// The replace() method returns a modified string where the pattern is replaced.
text= 'Visit Microsoft! and lets come and work Microsoft';
let result=text.replace('Microsoft','home')
console.log(result);

//with regEx
result=text.replace(/Microsoft/i,'home')
console.log(result);

result=text.replace(/Microsoft/g,'home')
console.log(result);

result=text.replace(/Microsoft/m,'home')
console.log(result);


//Using Regular Expression objects
  //Using test()---It searches a string for a pattern, and returns true or false, depending on the result.
  const pattern = /e/;
 console.log(pattern.test("The best things in life are free!")); 
 //or
 console.log(/s/.test('My name is Shabellah'));


 //exec()---It searches a string for a specified pattern, and returns the found text as an object.
 console.log(/best/.exec("The best things in life are free"));

 let x = 5 ^ 1;
 console.log(x);

