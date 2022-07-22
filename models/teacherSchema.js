const mongoose=require("mongoose")

const teacherSchema=mongoose.Schema({
    username:{
        type:String,
        required:true}, 

    email: {
        type:String,
        required:true},

    birthday: {
        type:String,
        // default: Date.now(), 
        required:false},

    age:{ 
        type:Number},

    password: {
        type:String,
        required:true}

})
module.exports = mongoose.model("teacher", teacherSchema)