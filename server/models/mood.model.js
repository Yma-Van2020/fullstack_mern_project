const mongoose = require("mongoose")

const  MoodSchema = new mongoose.Schema({
    ans1:{
        type:String,
        required:[true, "This field is required"],
        minlength:[3, "Input should be at least 3 chars long"]
    },
    ans2:{
        type:String,
        required:[true, "This field is required"],
        minlength:[3, "Input should be at least 3 chars long"]
    },
    ans3:{
        type:String,
        required:[true, "This field is required"],
        minlength:[3, "Input should be at least 3 chars long"]
    },
    ans4:{
        type:String,
        required:[true, "This field is required"],
        minlength:[3, "Input should be at least 3 chars long"]
    },
    dailyscore:{
        type:Number
    }
},{timestamps:true});

module.exports.Mood = mongoose.model("Mood",  MoodSchema)
module.exports.MoodSchema = MoodSchema