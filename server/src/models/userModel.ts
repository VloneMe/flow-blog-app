const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        require: [true, "Please enter your name!"],
        lowercase: true,
        minlength: [3, 'fullname must be 3 letters long'],
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
    },
    username: {
        type: String,
        minlength: [3, 'Username must be 3 letters long'],
        unique: true,
    },
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema);