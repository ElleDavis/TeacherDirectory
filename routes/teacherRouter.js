// ===========================Required (express,schema,router)
const express = require("express")
const teacherModel = require ("../models/teacherSchema")
const bcrypt =require("bcrypt")
const jwt = require('jsonwebtoken')
const {check, validationResult}=require("express-validator")
const router =express.Router()


// ===========================Router
//* Create or Register a new User

// router.get("/", (req,res)=>{
//     res.status(200).json("we're here")
// })
router.get('/', async (req, res) => {
    try {
        const teacher = await teacherModel.find()
        res.status(200).json(teacher)
    } catch (error) {
        console.log(error)
    }
 })
router.post('/', [
    check('username', "Username is required from Middleware!").notEmpty(),
    check("email", "Please use a valid email! from middleware").isEmail(),
    check("password", "Please enter a password").notEmpty(),
    check("password", "Please enter a password with six or more characters").isLength({min: 6}),
] ,async (req, res) => {
    const  teacherData = req.body

    const errors = validationResult(req)
    // Checks for validation errors
    if (!errors.isEmpty()){
        return res.json(errors.array())
    }

    try {
        // checking if there is an user with this email in the db
        const userExist = await teacherModel.findOne({email: teacherData.email})
        // if user exist we return!
        if (userExist) {
            return res.json({msg: "teacher already exist!"})
        }

        //* ==== Create New User
        // 1 Create the salt
        const SALT = await bcrypt.genSalt(12)
        // 2 use the salt to create a hash with the user's password
        const hashedPassword = await bcrypt.hash( teacherData.password, SALT)
        // 3 assign the hashed password to the userData
        teacherData.password = hashedPassword
        // Write the user to the db
        const teacher = await teacherModel.create( teacherData)

        //* create a new JWT Token

        const payload = {
            id: teacher._id,
            email: teacher.email
        }
        // const SECRET_KEY='MY_SECRET_KEY'
        const TOKEN = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "2 hours"})

        res.status(201).json({
            teacher: teacher,
            token: TOKEN
        })
        
    } catch (error) {
        console.log(error)
        res.status(400).json('Bad request!!!!!')
    }
})

module.exports=router
