// ===========================Required (express,schema,router)
const express = require("express")
const assignmentModel =require ("../models/assignmentSchema")
const router=express.Router()


// ===========================Router
// router.get('/', (req, res) => {
//     res.status(200).json({
//         todos: [ {task: 'Learn Express'} ]
//     })
// })

module.exports=router