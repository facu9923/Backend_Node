const mongoose = requier("mongoose")

const StorageScheme = new mongoose.Schema(
    {
        filename:{
            type:String
        },
        url:{
            type:String
        },
    },
    {
        timestamps:true,
        versionKey:false,
    }
);

moduleexports = mongoose.model("storages", StorageScheme)