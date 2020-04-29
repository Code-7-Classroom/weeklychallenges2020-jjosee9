// // HARD: Create a JSON file that will have 10 employees in it, 
// their employeeID, their name, their salary and department name.
// // Then, create an express API so that when you hit the endpoint 
// with a GET request we want the api to respond with all data on the employees.
// // If you hit the endpoint with their employeeID, we want to hand 
// up only the information on that one employee.
// // If you hit the endpoint with an incorrect employeeID, send
//  back the correct HTTP status code and an error message stating that the employee was not found.
// // GET::myendpointname.com/employees = Json with information 
// from all 10 employees.
// // GET::myendpointname.com/employees/<employeeID> = Json with the information from that specific employee.


let express = require ('express');
let app = express();
let data = require('../hard/employees.json')


app.get('/employees', (req,res) => {
     if(!data) {
         res.status(404).send(`Could not find employee`)
     }
     res.send(data)
});

app.get('/employees/:id', function (req,res){
    const sData = data.employees.find(function(employees){
        return parseInt(req.params.id) === employees.id
    })
    if(!sData){
        res.status(404).send(`Invalid ID`)
    }
    res.send(sData)
})


const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
});
