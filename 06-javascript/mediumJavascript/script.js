//Write a program to tell if someone is shouting (typing in all caps),
 //whispering (typing in all lowercase), or neither. 
// Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.

var x=prompt('leave a comment');
if (x == x.toLowerCase()){
    document.getElementById("test").innerHTML =(' you are whispering..');
    console.log(x + ' comment was whispered');

} else if (x == x.toUpperCase()){
    document.getElementById("test").innerHTML =(' you are shouting..');
    console.log(x + ' comment was shouted');
} else {
    document.getElementById("test").innerHTML =(' you are commenting normally..');
    console.log(x + ' comment was normal');
}