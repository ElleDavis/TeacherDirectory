console.log("Hey Ms.Parker")
//Imports
const express= require ("express")
const app = express()
const PORT= process.env.PORT || 3000
require("dotenv").config() 

const teacherRouter= require("./routes/teacherRouter")
const assignmentRouter= require("./routes/assignmentRouter")
const authRouter= require("./routes/authRouter")
const Mongoconfig=require("./config/MongoConfig")
const morgan =require("morgan")
const helmet =require("helmet")
<<<<<<< HEAD
const cors =require ("cors")
require("dotenv").config() 

=======
const cors=require("cors")
>>>>>>> ade33a9 (reverted to fb60d8c, login and registration working)

//Middleware
app.use(express.json())
//monitoring
app.use(morgan("dev"))
//hide headers
app.use(helmet())
app.use(cors())


//Routers
app.use('/teacher', teacherRouter)
app.use("/assignment", assignmentRouter)
app.use("/auth", authRouter)


//* Routes
app.get("/", (req,res)=>{
    res.status(200).json({msg:"Welcome to my API"})
})

app.listen (PORT, () =>{
console.log(`server running on ${PORT}`)
Mongoconfig()
})