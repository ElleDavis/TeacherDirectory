
// ===========================Required (express,schema,router)
const express = require("express")
const assignmentModel =require ("../models/assignmentSchema")
const authMiddleware = require('../Middleware/authMiddleware')
const router=express.Router()



// ===========================ROUTES
// router.get("/", (req,res)=>{
//     res.status(200).json({
//         assignment: [ {Department: 'Math'} ]})
// })

//* GET assignment
router.get('/',authMiddleware, async (req, res) => {
    try {
        const assignment = await assignmentModel.find()
        res.status(200).json(assignment)
    } catch (error) {
        console.log(error)
    }
 })
 //* GET assignment by id
router.get('/:id', authMiddleware, async (req, res) => {
    const id = req.params.id
    console.log(req.user)
    try {
        const assignment = await assignmentModel.findById(id)
        res.status(200).json(assignment)
    } catch (error) {
        console.log(error)
    }
 })
 //POST assignment
 router.post('/',authMiddleware, async (req, res) => {
    const assignmentData = req.body 
    assignmentData.teacher = req.teacher.id
    console.log(assignmentData)
    try {
        const assignment = await assignmentModel.create(assignmentData)
        res.status(200).json(assignment)
    } catch (error) {
        console.error(error)
        res.status(400).json('Bad request!!!!!')
    }
 })
 //* UPDATE assignment BY ID
router.put('/:id',authMiddleware, async (req, res) => {
    const id = req.params.id
    const newAssignmentData = req.body
     try {
         //* find the assignment by the id
         const assignment = await assignmentModel.findByIdAndUpdate(id, newAssignmentData, {new: true})
         res.status(200).json(assignment)
     } catch (error) {
         console.log(error)
     }
})
//! DELETE A assignment
router.delete('/:id',authMiddleware, async (req, res) => {
    const id = req.params.id
    console.log("from Delete", req.teacher)

    try {
        const assignment = await assignmentModel.findByIdAndDelete(id)
        res.status(200).json({msg: 'Assignment was deleted!'})
    } catch (error) {
        console.log(error);
    }
})


module.exports=router