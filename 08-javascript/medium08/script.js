//MEDIUM: Write a function that would allow you to do this:
//var sharePizza = cutPizzaSlices(8);
//console.log(sharePizza(2));                                                                                                                                                                    
  // prints "Each person gets 4.00 slices of pizza"
//console.log(sharePizza(3)); 
  // prints "Each person gets 2.67 slices of pizza"


  
// var sharePizza = cutPizzaSlices(8);

// function exercise(activity) {
//     console.log("Today's exercise:" + activity);
// }

function cutPizzaSlices(slices){
    return function(person){
        return `Each Person gets ${slices / person} slices of pizza.`;
    }
}

var sharePizza;
sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));                                                                                                                                                                    
console.log(sharePizza(3)); 
function cutPizzaSlices(slices){
    return function(person){
        return `Each Person gets ${slices / person} slices of pizza.`;
    }
}



