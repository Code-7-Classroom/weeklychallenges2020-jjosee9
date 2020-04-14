// MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown 
// to you beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array return its index,
//  otherwise return -1.
// You may assume no duplicate exists in the array.
// Hint:  Use a function. Use the built in method .indexOf( ) and/or  for loops. 
// Review your lesson on Arrays and use the Resources provided at the end of the 
// lesson to practice to aid in working through this problem. 
// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// var a = [0, 1, 2, 4, 5, 6, 7]

// console.log(a.indexOf(4))

// a.indexOf()

var numbers = [90, 8, 30, 84, 5, 3];
var target = 7;

function findTarget(numbers, target) {
    // var i = target
    if( i = target){
        return numbers.indexOf(target)
    }else {
        return -1;
    }
};
console.log(numbers, target);