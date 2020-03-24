//Create a simple calculator that prompts the user for a number, 
//an operator (either +, -, * or /) and another number,
// and then uses the functions created in the hard challenge to output 
 //the value in sentence form. Example output: "3 + 4 = 7"
 
 var numberOne = parseInt(prompt ('enter a number'));
 var operator = prompt('enter an operator');
 var numberTwo = parseInt(prompt ('enter another number'));
 var answer= null;



  switch (operator){
     case '+':
        answer = numberOne + numberTwo;
        console.log('Your answer is ' + answer);
    
    case "-":
        answer = numberOne - numberTwo;
        console.log('Your answer is ' + answer);
        break;
       
    case '*':
        answer = numberOne * numberTwo;
        console.log('Your answer is ' + answer);
        break;


    case "/":
        answer = numberOne / numberTwo;
        console.log('Your answer is ' + answer);
        break;
        default:
        console.log('redo it');

         

        










  }