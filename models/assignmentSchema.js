const mongoose=require("mongoose")

const assignmentSchema=mongoose.Schema({
    created_by: {
        type:String, 
        required:true},

    created_at: {
        type: Date,
        default: Date.now()
        },

    assignment_name: {
        type:String, 
        required:true},

    assignment_subject: {
        type:String, 
        required:true},

    assignment_due: {
        type:String, 
        required:true},

    private: {
        type:Boolean, 
        required:true}
})
module.exports = mongoose.model("assignments", assignmentSchema)