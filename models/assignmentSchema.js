const mongoose=require("mongoose")

const assignmentSchema=mongoose.Schema({
    created_by: {
        type:String, 
        required:false},

    created_at: {
        // type: Date,
        type: String,
        default: Date.now()
        },

    assignment_name: {
        type:String, 
        required:true},

    assignment_subject: {
        type:String, 
        required:true},

    assignment_due: {
        type:Date, 
        required:true},

    private: {
        type:Boolean, 
        required:false}
})
module.exports = mongoose.model("assignments", assignmentSchema)