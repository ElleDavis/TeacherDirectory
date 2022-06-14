console.log("Hey Ms.Parker")

const express= require ("express")
const teacherRouter= require("./routes/teacherRouter")
const assignmentRouter= require("./routes/assignmentRouter")
const authRouter= require("./routes/authRouter")
const Mongoconfig=require("./config/MongoConfig")
require("dotenv").config() // init dotenv
const app = express()
const PORT= 3000


//* Routers
app.use(express.json())
app.use('/teacher', teacherRouter)
app.use("/assignment", assignmentRouter)
app.use("/auth", authRouter)


//* Routes
app.get("/", (req,res)=>{
    res.status(200).json({msg:"welcome"})
})

app.listen (PORT, () =>{
console.log(`server running on ${PORT}`)
Mongoconfig()
})