const mongoose = require('mongoose');

const schema = mongoose.Schema ({
    facultyId: Number,
    name: String,
    age: Number,
    department: String
});

module.exports = mongoose.model('Faculty', schema);