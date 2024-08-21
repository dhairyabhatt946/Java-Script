const express = require('express');
const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://23010101023:Ug6zVB4zH7l44vUl@cluster0.tlxa8.mongodb.net/CSE_3A_105';
const student = require('./Student');
const bodyParser = require('body-parser');

mongoose.connect(connectionString).then(() => {
    console.log('Connected to MongoDB');

    const app = express();
    app.use(bodyParser.urlencoded());

    //get all students
    app.get('/students', async (req, res) => {
        const stu = await student.find();
        res.send(stu);
    });

    //get student by enrollment
    app.get('/students/:enrollment', async (req, res) => {
        const stu = await student.findOne({enrollment: req.params.enrollment});
        res.send(stu);
    });

    //get students by mongo db's _id
    app.get('/students/byid/:_id', async (req, res) => {
        const stu = await student.findById({_id: req.params._id});
        res.send(stu);
    });

    //create student
    app.post('/students', async (req, res) => {
        stu = new student({...req.body}); //body ma game etla field hoy pan avse ej field j schema ma define karela hase
        //stu = new student(req.body); bcoz body is passed as object only so no need to use spread operator
        const ans = await stu.save();
        //const ans = await student.create(stu);
        res.send(ans);
    });

    //update student by enrollment
    app.patch('/students/:enrollment', async (req, res) => {
        const ans = req.body;
        await student.findOneAndUpdate({enrollment: req.params.enrollment}, ans);
        //await student.findOneAndUpdate({enrollment: req.params.enrollment}, {$set : ans});
        res.send();
    });

    //update student by mongodb's id
    app.patch('/students/:_id', async (req, res) => {
        const ans = req.body;
        await student.findOneAndUpdate({_id: req.params._id}, ans);
        //await student.findOneAndUpdate({enrollment: req.params.enrollment}, {$set : ans});
        res.send();
    });

    app.delete('/students/:enrollment', async (req, res) => {
        const ans = await student.deleteOne({enrollment: req.params.enrollment});
        res.send(ans);
    });

    //delete student by enrollment
    // app.delete('/students/:enrollment', async (req, res) => {
    //     const ans = await student.findOneAndDelete({enrollment: req.params.enrollment});
    //     res.send(ans);
    // });

    // //delete student by mongodb's _id
    // app.delete('/students/:_id', async (req, res) => {
    //     const ans = await student.findOneAndDelete({_id: req.params._id});
    //     res.send(ans);
    // });

    app.listen(3000, () => {
        console.log('Server running at 3000');
    });
});