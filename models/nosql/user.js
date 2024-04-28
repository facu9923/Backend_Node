const mongoose = require("mongoose")

const UserScheme = new mongoose.Schema(
    {
        name:{
            type:String
        },
        age:{
            type:Number
        },
        email:{
            type:String,
            unique:true
        },
        pasword:{
            type:String
        },
        rol:{
            type:["user","admin"],
            default:"user",
        },
    },
    {
        timestamps:true,
        versionKey:false,
    }
);

moduleexports = mongoose.model("users", UserScheme)