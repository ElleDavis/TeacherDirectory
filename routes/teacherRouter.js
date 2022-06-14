
// ===========================Required (express,schema,router)
const express = require("express")
const teacherModel= require ("../models/teacherSchema")
const router=express.Router()


// ===========================ROUTES
// router.get("/", (req,res)=>{
//     res.status(200).json({
//         teachers: [ {Department: 'Math'} ]})
// })

//* GET Teacher
router.get('/', async (req, res) => {
    try {
        const teacher = await teacherModel.find()
        res.status(200).json(teacher)
    } catch (error) {
        console.log(error)
    }
 })
 //* GET Teacher by id
router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const teacher = await teacherModel.findById(id)
        res.status(200).json(teacher)
    } catch (error) {
        console.log(error)
    }
 })
 //POST Teacher
 router.post('/', async (req, res) => {
    const teacherData = req.body 
    try {
        const teacher = await teacherModel.create(teacherData)
        res.status(200).json(teacher)
    } catch (error) {
        console.error(error)
        res.status(400).json('Bad request!!!!!')
    }
 })
 //* UPDATE Teacher BY ID
router.put('/:id', async (req, res) => {
    const id = req.params.id
    const newTeacherData = req.body
     try {
         //* find the Teacher by the id
         const teacher = await teacherModel.findByIdAndUpdate(id, newTeacherData, {new: true})
         res.status(200).json(teacher)
     } catch (error) {
         console.log(error)
     }
})
//! DELETE A Teacher
router.delete('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const teachers = await teacherModel.findByIdAndDelete(id)
        res.status(200).json({msg: 'Teacher was deleted!'})
    } catch (error) {
        console.log(error);
    }
})


module.exports=router