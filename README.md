# TeacherDirectory
This Directory allows teachers to Create an account, Loginand manage assignments. 

### Tech Stack
Server:
Database:
Tools:

## Names of all ENV Variables
    - MONGODB_URI
    - JWT_SECRET
    - SALT

## Instructions on Installing & Running Locally
git clone teacherDiectory_Api
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
    - Create teachers
    - Read teachers
    - Update teachers
    - Delete teachers

3. Assignments Routes:
    - Create Assignments
    - Read Assignments
    - Update Assignments
    - Delete Assignments

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
student accounts

https://elle-teacherdirectory-api.herokuapp.com/
