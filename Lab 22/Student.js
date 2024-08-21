const mongoose = require('mongoose');

const schema = mongoose.Schema({
    enrollment: Number,
    name: String,
    age: Number,
    branch: String,
    semester: Number
});

module.exports = mongoose.model('Student', schema);