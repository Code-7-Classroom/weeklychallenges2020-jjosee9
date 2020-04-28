var inquirer = require('inquirer');
inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: 'input',
            message: 'What is your trainer name?',
            name: 'trainerName'
        },
        {
            type: 'password',
            message: 'password',
            name: 'trainerPassword'
        },
        {
            type:'list',
            message: 'Choose your fisrt Pokemon',
            choices: ['Bulbasaur', 'Squirtle', 'Charmeleon', 'Pikachu'],
            name: 'trainerChoice'
        },
        {
            type: 'confirm',
            message: 'Are you sure?',
            default: true,
            name: 'trainerConfirm'   
        }

    ])
    .then(answers => {
        // Use user feedback for... whatever!!
           if (answers.trainerConfirm === true){
              console.log(`Hello ${answers.trainerName}, your ${answers.trainerChoice} is ready for
               battle!`);
           } else {
               console.log(`Thats ok ${answers.trainerName} come back when you're more sure`);

           }

    })
    .catch(error => {
       console.log('you had an error');
    })

    let login =() => {
        console.log('logging in');
    };
    login()

