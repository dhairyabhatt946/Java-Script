const mongoose = require('mongoose');

const schema = mongoose.Schema ({
    id: Number,
    name: String,
    price: Number
});

module.exports = mongoose.model('Product', schema);