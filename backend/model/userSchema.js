// Preparing the schema for the entry in data base

const { Schema, model } = require("mongoose");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const SECRET = 'SECRET'

const userSchema = new Schema({
    name : {
        type : "String",
        required : true,
        minLength : [5 , "Name should be of 5 length"],
        maxLength : [15 , "Name should be of max 15 length"],
        trim : true,
        lowercase : true,
    },
    username : {
        type: "String",
        required : [true , "Username is required"],
        unique : true,
    },
    email : {
        type: "String",
        required : [true , "email is required"],
        lowercase : true,
        trim : true,
        unique : true,
        match : [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ , "Please Fill the valid Email"],
    },
    password : {
        type: "String",
        required : [true , "email is required"],
        // Explicitly mangenge tab hi
        select : false,
    },
    bio : {
        type : "String",
    }
} , {
    timestamps : true
});

// Can use pre hook

// Do Not Use Arrow Function
userSchema.pre('save' , async function (next){
    if(!this.isModified){
        console.log("Password doesn't Changed");
        next();
    }

    // Encryption
    // 10 Length ka encryption
    this.password = await bcrypt.hash(this.password , 10);
});

// Can use custom predefined methods
userSchema.methods = ({
    // In form of key and value
    jwtToken(){
        return jwt.sign({
            // this -> database
            id : this._id,
            email : this.email,
            username : this.username
        },
        process.env.SECRET || SECRET,
        {expiresIn : "24h"}
    )
    }
})

// Creating the model
const User = model("user-info" , userSchema);

module.exports = User;