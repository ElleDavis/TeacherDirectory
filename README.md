# TeacherDirectory
This Directory allows teachers to Create an account, Login and manage assignments. 

### Tech Stack
Server: Node,Express
Database: MongoDB
Tools: Postman

## Names of all ENV Variables
    - MONGODB_URI
    - JWT_SECRET
    - SALT

## Instructions on Installing & Running Locally
git clone https://github.com/ElleDavis/TeacherDirectory
cd into yourr cloned teacherDiectory_Api

install dependencies;
- npm init -y
- npm i:
    "bcrypt":
    "dotenv":
    "express": 
    "express-validator": 
    "helmet":
    "jsonwebtoken": 
    "mongoose":
    "morgan": 

## Endpoints, Parameters, Schema

1. Server: app.get("/") rreturns "Welcome to my API"
2. Teacher Routes:
    - Create teachers: POST/http://localhost:3000/teacher
    - Read teachers GET/http://localhost:3000/teacher
    - Read teachers by ID GET/http://localhost:3000/teacher/Id#
    - Update teachers  PUT/http://localhost:3000/teacher
    - Delete teachers  DELETE/http://localhost:3000/teacher

3. Assignments Routes:
    - Create Assignments: POST/http://localhost:3000/assignments
    - Read Assignments GET/http://localhost:3000/assignments
    - Read Assignments by ID GET/http://localhost:3000/assignments/Id#
    - Update Assignments PUT/http://localhost:3000/assignments
    - Delete Assignments DELETE/http://localhost:3000/assignments

4. Authenticate Teacher
    - POST: Login teacher

### Teacher Schema
         ```
    username {type:String, required:true}, 
    email: {type:String,required:true},
    birthday: {type:String, required:true},
    age: {type:Number},
    password: {type:String,required:true}
        ```,
     
### Assignment Schema:
         ```
    created_by: {type:String, required:true},
    created_at: {type: Date,default: Date.now()},
    assignment_name: {type:String, required:true},
    assignment_subject: {type:String, required:true},
    assignment_due: {type:String, required:true},
    private: { type:Boolean, required:true}
        ```
    

### Updates:
Adding student accounts

https://elle-teacherdirectory-api.herokuapp.com/
