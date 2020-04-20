// EASY: Using ES6 syntax, write a function that takes in 
//an array of numbers and outputs the maximum number.
// Input: [1, 2, 3]  Output: 3
// Input: [3, 6, 4, 5, 2, 1]  Output: 6
// Input: [3, 3, 3]  Output: 3

const numbers = [1, 2, 3, 19, 4, 5, 6,];

// console.log(Math.max(...numbers));simple way to do it

const largestNumber = (values) => {
    let highest = 0;
    for (let i=0; i<values.length; i+=1) {
       if (values[i] > highest) {
           highest = values[i];
       }
    }
    return highest
}

console.log(largestNumber(numbers));