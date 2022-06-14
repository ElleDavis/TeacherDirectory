const mongoose=require("mongoose")

const assignmentSchema=mongoose.Schema({
    created_by: {
        type:String, 
        required:true},

    created_at: {
        type:Date, 
        required:true},

    teacher_name: {
        type:String, 
        required:true},

    teacher_subject: {
        type:String, 
        required:true},

    teacher_email: {
        type:String, 
        required:true},

    private: {
        type:Boolean, 
        required:true}
})
module.exports = mongoose.model("assignments", assignmentSchema)