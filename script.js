//Recursive function of factorial of a number
function factorial(n) {
    // Base case: if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
      return 1;
    }
    
    // Recursive case: multiply n with the factorial of (n-1)
    return n * factorial(n - 1);
  }
  
console.log(factorial(5)); 
console.log(factorial(7)); 
console.log(factorial(0));
console.log(factorial(2));

//Shallow Copy (clone object)
let original = { name: 'John', age: 30 };

//Object.assign()
let clone = Object.assign({}, original);
console.log(clone);

//Spread Operator
clone= {...original};
console.log(clone);

//Object.create()
clone=Object.create(Object.getPrototypeOf(original),Object.getOwnPropertyDescriptors(original))
console.log(clone);

//JSON.parse() and JSON.stringify():
clone=JSON.parse(JSON.stringify(original))
console.log(clone);

//DEEP COPY --We use recursive function
function deepCopy(obj){
    if (typeof obj !=='object'|| obj===null) {
        return obj
    }
    const clone=Array.isArray(obj)?[]:{};

    for (let key in obj){
        if(obj.hasOwnProperty(key)){
            clone[key]=deepCopy(obj[key]);
        }
    }
    return clone
}
original = { 
    name: 'John', 
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    }
  };
  
   clone = deepCopy(original);
  console.log(clone);


  clone= {...original};
console.log(clone);