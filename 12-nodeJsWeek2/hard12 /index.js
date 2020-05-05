// // HARD: Add the remaining CRUD functionality to your medium problem.
// // Make sure you return the proper HTTP status codes based on the
//  outcome of the request. Be sure to implement error checking here.
// // If an invalid request is made, we want to return some sort of
//  error message and the correct HTTP status code for the situation.
// // HTTP Status Codes: http://www.restapitutorial.com/httpstatuscodes.html

// // POST::myendpointname.com/employees = Inserts new employee into your data.
// // GET::myendpointname.com/employees = Returns json with information from all
//  employees.
// // GET::myendpointname.com/employees/<employeeID> = Returns json with the information
//  from that specific employee.
// // PUT::myendpointname.com/employees/<employeeID> = Updates information for specified
//  employee.
// // DELETE::myendpointname.com/employees/<employeeID> = Removes the employee with that 
// ID from the data.


let express = require('express');
let app = express();
let data = require('./public/employees.json')

app.use(express.json())


app.get('/employees', (req, res) => {
    if (!data) {
        res.status(404).send(`Could not find employee`)
    }
    res.send(data)
});

app.get('/employees/:id', function (req, res) {
    const sData = data.employees.find(function (employee) {
        return parseInt(req.params.id) === employee.id
    })
    if (!sData) {
        res.status(404).send(`Invalid ID`)
    }
    res.send(sData)
})



app.post('/employees', function (req, res) {
    const sData = {
        id: data.employees.length + 1,
        name: req.body.name,
        salary: req.body.salary,
        job: req.body.job
    }
    if (!sData) {
        res.status(404).send(`Couldn't add employee`)
    }
    data.employees.push(sData)

    res.send(sData)
});


app.put('/employees/:id', function (req, res) {
    const sData = data.employees.find(function (employee) {
        return parseInt(req.params.id) === employee.id
    })
    if (!sData) {
        res.status(404).send(`Couldn't find the employee ID`)
    }

    sData.name = req.body.name,
        sData.salary = req.body.salary,
        sData.job = req.body.job

    res.send(sData)
});


app.delete('/employees/:id', function (req, res) {
    const sData = data.employees.find(function (employee) {
        return parseInt(req.params.id) === employee.id
    })
    if (!sData) {
        res.status(404).send(`Couldn't find the student id`)
    }
    const index = data.employees.indexOf(sData)

    data.employees.splice(index, 1)

    res.send(sData)
});







const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`listening on port ${port}...`))//{
//     console.log(`Listening on port ${port}...`)
// });
