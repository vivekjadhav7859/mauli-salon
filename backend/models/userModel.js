const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({  //in this project only admins are the users
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    address : {
        type : {},
        required : true
    },
    role : {
        type : Number,
        default : 0
    }
},{timestamps:true})   //timestamp for storing new user registered time

module.exports = mongoose.model('users',userSchema);
