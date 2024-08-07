const express = require('express');
const app = express();

app.use(express.json());

let list = [];

//read
app.get('/list', (req, res)=> {
    res.send(list);
})

//create
app.post('/list', (req, res)=> {
    //destructuring
    const {name} = req.body;
    list.push(name);
    res.send(list);
})

//update
app.put('/list/:index', (req, res)=> {
    const {name} = req.body;
    list[req.params.index] = name;
    res.send(list);
})

//delete
app.delete('/list/:index', (req, res)=> {
    list.splice(req.params.index, 1);
    res.send(list);
})

app.listen(3000, (req, res)=> {
    console.log('Server running');
})