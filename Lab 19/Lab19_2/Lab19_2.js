const express = require('express');

const fs = require('fs');

const app = express();

app.get('/', (req, res)=> { 
    res.end(fs.readFileSync('myWebsite.html'));
});

app.get('/home', (req, res)=> { 
    res.end(fs.readFileSync('D:\\Darshan University\\Semester 3\\Web Technology\\Lab Solution\\Lab 19\\Lab19_2\\home.html'));
});

app.get('/pricing', (req, res)=> { 
    res.end(fs.readFileSync('D:\\Darshan University\\Semester 3\\Web Technology\\Lab Solution\\Lab 19\\Lab19_2\\pricing.html'));
});

app.get('/features', (req, res)=> { 
    res.end(fs.readFileSync('D:\\Darshan University\\Semester 3\\Web Technology\\Lab Solution\\Lab 19\\Lab19_2\\features.html'));
});

app.get('/contact', (req, res)=> { 
    res.end(fs.readFileSync('D:\\Darshan University\\Semester 3\\Web Technology\\Lab Solution\\Lab 19\\Lab19_2\\contact.html'));
});

app.get('/about', (req, res)=> { 
    res.end(fs.readFileSync('D:\\Darshan University\\Semester 3\\Web Technology\\Lab Solution\\Lab 19\\Lab19_2\\about.html'));
});

app.listen(2000, ()=> {
    console.log('Server running on port 2000');
});