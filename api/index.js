const express = require('express') //express library
const app = express() //using express in our app
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const userRoute = require("./routes/user")

//MongoDB connection
mongoose.connect(process.env.MONGO_URL)//its a promise so we can use .then and .catch
    .then(() => console.log("MongoDB connection successful"))
    .catch((err) => console.log(err))


//Middleware
app.use(express.json())
app.use("/api/users", userRoute)



//post listening
app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running on port 5000");

})