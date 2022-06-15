console.log("Hey Ms.Parker")
//Imports
const express= require ("express")
const app = express()
const PORT= 3000

const teacherRouter= require("./routes/teacherRouter")
const assignmentRouter= require("./routes/assignmentRouter")
const authRouter= require("./routes/authRouter")
const Mongoconfig=require("./config/MongoConfig")
const morgan =require("morgan")
const helmet =require("helmet")
require("dotenv").config() 


//Middleware
app.use(express.json())
app.use('/teacher', teacherRouter)
app.use("/assignment", assignmentRouter)
app.use("/auth", authRouter)
//monitoring
app.use(morgan("dev"))
//hide headers
app.use(helmet())


//* Routes
app.get("/", (req,res)=>{
    res.status(200).json({msg:"welcome"})
})

app.listen (PORT, () =>{
console.log(`server running on ${PORT}`)
Mongoconfig()
})