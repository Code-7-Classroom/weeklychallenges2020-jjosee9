//1. Create a Person constructor that has three properties: name, job, and age.
//2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
//3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a    back-end developer".
//  var john = {
//      name: 'John',
//      exercise: 'running',
//      job: 'teacher'
//  };
// 4. Create a Programmer constructor that inherits all the members from Person with 
//an additional 'languages' property that is passed in and a busy property that is NOT
 //passed in and is set to true by default.
//5. Give the Programmer a 'completeTask' method that updates the busy property on that
 //programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates 
 //the busy property on that programmer to be true.


var Person = function (name, job, age, ) {
    this.name = 'John';
    this.job = 'Developer';
    this.age = age;
    this.exercise = 'running';


    this.activity = function() {
        console.log(this.exercise + ' is fun - said no one ever');
    }

   this.profession = function() {
        console.log(this.name + ' is a ' + this.job);
     }
}

var john = new Person ()//running);
john.activity();

var profession = new Person()
john.profession();

var programmer = new Person('languages');
programmer.constructor === Person // => true





