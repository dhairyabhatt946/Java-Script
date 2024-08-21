const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const product = require('./Product');
const connectionString = 'mongodb+srv://23010101023:Ug6zVB4zH7l44vUl@cluster0.tlxa8.mongodb.net/CSE_3A_105';

mongoose.connect(connectionString).then(() => {
    console.log('Connected to the database');

    const app = express();
    app.use(bodyParser.urlencoded());

    //get all products
    app.get('/products', async (req, res) => {
        res.send(await product.find());
    });

    //get product by id
    app.get('/products/:id', async (req, res) => {
        res.send(await product.findOne({id: req.params.id}));
    });

    //create product
    app.post('/products', async (req, res) => {
        const pro = new product(req.body);
        await pro.save();
        res.send('Product created');
    });

    //update product
    app.patch('/products/:id', async (req, res) => {
        await product.findOneAndUpdate({id: req.params.id}, req.body);
        res.send('Product updated');
    });

    //delete product
    app.delete('/products/:id', async (req, res) => {
        res.send(await product.deleteOne({id: req.params.id}));
    });

    app.listen(3000, () => {
        console.log('Connected to the server at 3000');
    });
});