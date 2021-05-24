const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    number : {
        type: Number,
        required: true,
        unique: true
    },
    gender : String,
    age : Number
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;