const express = require('express');

const app = express();

app.get('/about', (req, res)=> {
    console.log(__dirname);
    res.sendFile(__dirname + '\\about.txt');
});

app.get('/contact', (req, res)=> {
    res.sendFile(__dirname + '\\contact.txt');
});

app.listen(3090, ()=> {
    console.log('Server running on port 3090');
});
