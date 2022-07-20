const express = require('express')
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel = require('../models/teacherSchema')
const router = express.Router()


//* teacher Login
router.post('/',[
    check("email", "Please provide a valid email").isEmail(),
    check("password", "Check your password!").notEmpty()
] , async (req, res) => {
    const userData = req.body

    const errors = validationResult(req)
    // Checks for validation errors
    if (!errors.isEmpty()){
        return res.json(errors.array())
    }

    try {
        // Find the user with the provided email
        const user = await userModel.findOne({email: userData.email})
        if (!user){
            return res.json('User not found!')
        }

        // Compare the plain text password to hashed password
        const isMatch = await bcrypt.compare(userData.password, user.password)
        if (!isMatch){
            return res.json('Password is not a match!')
        }
          //* create a new JWT Token

          const payload = {
            id: user._id,
            email: user.email
        }
        // const SECRET_KEY='MY_SECRET_KEY'
        const TOKEN = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "2 hours"})

        res.status(201).json({
            teacher: user,
            token: TOKEN
        })

    } catch (error) {
        console.log(error);
        res.status(500).json('Server Error')
    }
})

module.exports = router