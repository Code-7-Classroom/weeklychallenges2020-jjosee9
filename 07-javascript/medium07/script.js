//Create a program that accepts a number (1-12) as input and logs to the console that number 
//and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.”
// Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

// STEPS
// 1. ask user for number
// 2. check for invalid number
// 3. link number to month
// 4. log number and month

function getMonthName() {

    // 1
    var monthNumberString = prompt('Enter a month number');
    var monthNumberInt = parseInt(monthNumberString);

    // 2
    if (monthNumberInt < 1 || monthNumberInt > 12) {
        alert('invalid number')
        return
    } else if (isNaN(monthNumberInt)) {
        alert('Not a Number')
        return
    }

    //3 link number to month
    var monthNumberIntCorrected = monthNumberInt - 1
    var monthNameArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var monthNameString = monthNameArray[monthNumberIntCorrected]

    console.log(monthNameString);
    return
}

getMonthName()