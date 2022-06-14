const mongoose = require("mongoose")

module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI) //* Making the request to connect
       mongoose.connection //* Double checking everything went good in the request
       console.log('MongoDB Connected'); //* Logging the connection was good 
    } catch (error) {
        console.error(error) //* Logging the connection was bad
    }
}