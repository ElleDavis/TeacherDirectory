#TeacherDirectory

##Names of all ENV Variables
    - MONGODB_URI
    - JWT_SECRET
    - SALT

##Instructions on Installing & Running Locally
git clone teacherDiectory_Api
cd into yourr cloned teacherDiectory_Api

install dependencies;
- npi init -y
- npm i:
    "bcrypt":
    "dotenv":
    "express": 
    "express-validator": 
    "helmet":
    "jsonwebtoken": 
    "mongoose":
    "morgan": 
    
##Endpoints, Parameters, Schema

1. Teacher Routes
    - Create teachers
    - Read teachers
    - Update teachers
    - Delete teachers

###Teacher Schema
         ```
    username {type:String, required:true}, 
    email: {type:String,required:true},
    birthday: {type:String, required:true},
    age: {type:Number},
    password: {type:String,required:true}
        ```
     

2. Assignments Routes
    - Create Assignments
    - Read Assignments
    - Update Assignments
    - Delete Assignments

        ###Assignment Schema
         ```
        {
    created_by: {type:String, required:true},
    created_at: {type: Date,default: Date.now()},
    assignment_name: {type:String, required:true},
    assignment_subject: {type:String, required:true},
    assignment_due: {type:String, required:true},
    private: { type:Boolean, required:true}
        }
        ```

3. Authenticate Teacher
    - get teacher
    

##Hosted On Heroku (WE'LL DEPLOY TOGETHER ON FRIDAY)