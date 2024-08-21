const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const faculty = require('./Faculty');
const connectionString = 'mongodb+srv://23010101023:Ug6zVB4zH7l44vUl@cluster0.tlxa8.mongodb.net/CSE_3A_105';

mongoose.connect(connectionString).then(() => {
    console.log('Connected to the database');

    const app = express();
    app.use(bodyParser.urlencoded());

    //get all faculties
    app.get('/faculties', async (req, res) => {
        res.send(await faculty.find());
    });

    //get faculty by id
    app.get('/faculties/:facultyId', async (req, res) => {
        res.send(await faculty.findOne({facultyId: req.params.facultyId}));
    });

    //create faculty
    app.post('/faculties', async (req, res) => {
        const fac = new faculty(req.body);
        await fac.save();
        res.send('faculty created');
    });

    //update faculty by id
    app.patch('/faculties/:facultyId', async (req, res) => {
        await faculty.findOneAndUpdate({facultyId: req.params.facultyId}, req.body);
        //await student.findOneAndUpdate({enrollment: req.params.enrollment}, {$set : ans});
        res.send('Faculty updated');
    });

    //delete faculty by id
    app.delete('/faculties/:facultyId', async (req, res) => {
        res.send(await faculty.deleteOne({facultyId: req.params.facultyId}));
    });

    app.listen(3000, () => {
        console.log('Connected to the server at 3000');
    });
});