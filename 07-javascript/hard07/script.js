//HARD: Given the information below for Tom and Jerry. 
//Tom - 	height:  9in   	mass: 8 lbs
//Jerry - 	height: 10cm 0.1m	mass: 45 g 0.045kg
//Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
//BMI = mass / height ^2 = mass / (height * height)
//Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. 
//Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry.
// Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).


var tom = {
  name: 'tom',
  mass: 8,
  height: 9,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
}
var jerry = {
  name: 'jerry',
  mass: .1,
  height: 3.94,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
}

tom.calcBMI();
jerry.calcBMI();

if (tom.bmi < jerry.bmi) {
  console.log("Jerry's BMI is bigger than Tom's");
}
else if (tom.bmi > jerry.bmi) {
  console.log("Tom's BMI is bigger than Jerry's");
} else if (tom.bmi == jerry.bmi) {
  console.log('Tom and Jerry have the same BMI');
}

// <
// >
// ==
// <=
// >=