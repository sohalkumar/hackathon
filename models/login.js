// MongoDB collection model for login and registering 

const mongoose = require("mongoose")

const UserDetail = new mongoose.model(
    "UserDetail",
    new mongoose.Schema({
        fname: {
            type: String,
            required: true
        },
        lname: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 8 
        }
    })    
)

module.exports = UserDetail