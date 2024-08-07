const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());

let students = [
    {
        name: "Dhairya",
        id: 5,
        age: 18
    }
];

//ReadAllStudents
app.get('/students', (req, res)=> {
    res.send(students);
})

//ReadStudentById
app.get('/students/:id', (req, res)=> {
    const ans = students.find((stu)=> {
        if(stu.id === req.params.id) {
            return true;
        }
    });
    res.send(ans);
})

//SearchByName
app.get('/students/search/:text', (req, res)=> {
    const ans = students.filter(stu=> stu.name.indexOf(req.params.text) > -1);
    res.send(ans);
})

//Create
app.post('/students', (req, res)=> {
    students.push(req.body);
    res.send('Student Added');
})

//Update
app.patch('/students/:id', (req, res)=> {
    const ans = students.findIndex(stu=> stu.id === req.params.id)
    data = req.body;
    students[ans] = {...students[ans], ...data};
    res.send("Student Updated");
})

//Delete
app.delete('/students/:id', (req, res)=> {
    const idToDelete = students.findIndex(stu=> stu.id === req.params.id)
    students.splice(idToDelete, 1);
    res.send('Student Deleted');
})

app.listen(3000, ()=> {
    console.log('Server running at 3000');
})