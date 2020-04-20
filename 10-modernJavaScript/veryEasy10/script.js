// VERY EASY: What is the difference between the following 
// JavaScript keywords: var, let and const.  Please provide a 
// written explanation. You are able to include a code reference
//  along with your written explanation for each keyword.


//var declares a function-scoped or globally-scoped variable
var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 2


// let is used in block scoping
let age=25;

if (true) {
let name = 'Jose';
let age = 25;
console.log(age);//will appear in the console because it is in the  block scope
}

console.log(name);//will not appear in the console because let name is inside the scope

//Const cannot be changed/redefined
const age = 27;
age =29;//example that cannot be defined again
console.log(age); //will log error