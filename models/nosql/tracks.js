const mongoose = require("mongoose")

const TracksScheme = new mongoose.Schema(
    {
        name:{
            type:String
        },
        album:{
            type:String
        },
        cover:{
            type:String,
            validator: (req) => {
                return true;
            },
            message : "ERROR_URL",
        },
        artist:{
            name:{
                type:String,
            },
            nockname:{
                type:String,
            },
            nationality:{
                type:String,
            },
        },
        duration:{
            start:{
                type: Number,
            },
            end:{
                type: Number,
            },
        },
        mediaId:{
            type: mongoose.Types.ObjectId,
        },
    },
    {
        timestamps:true,
        versionKey:false,
    }
);

moduleexports = mongoose.model("tracks", TracksScheme)