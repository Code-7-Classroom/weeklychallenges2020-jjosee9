//HARD: Given the information below for Tom and Jerry. 
//Tom - 	height:  9in   	mass: 8 lbs
//Jerry - 	height: 10cm 0.1m	mass: 45 g 0.045kg
//Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
//BMI = mass / height ^2 = mass / (height * height)
//Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. 
//Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry.
// Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

var Tom = {
    mass: 3.62874
    height: 0.2286
    calc.BMI: function() {
        this.bmi = this.mass / (this.height *
            this.height);
        return this.bmi;
    }
}