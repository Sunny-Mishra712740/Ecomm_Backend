
const mongoose = require("mongoose");  // Importing Mongoose Library into node.js file


// Structure for your data in a MongoDB
// Tracking :- name, userId, password, email, userType

const userSchema = new mongoose.Schema ({
    name : {
        type : String,
        required : true
    },
    userId : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        lowercase : true,
        minLength : 10,
        unique : true
    },
    userType : {
        type : String,
        required : true,
        default : "CUSTOMER",
        enum : ["CUSTIMER", "ADMIN"]   // Only those specific fixed value the user can enter
    }
},{timestamps : true, versionKey : false});

module.exports = mongoose.model("User", userSchema)   // Create a collection called as (Users)