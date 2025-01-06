// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from './db/index.js';

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.on("error", (err)=>{
        console.error("Server error: ", err);
        throw err;
    })
    
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.error("MongoDB connection failed: ", err);
    process.exit(1); // exit application with error
})








/*
import express from 'express';

const app = express();

// Connect to MongoDB
(async()=>{
    try{
        await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("ERROR", (err)=>{
            console.error("MongoDB connection error: ", err);
            throw err;
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    } catch(err){
        console.error("ERROR: ", err);
        throw err;
    }
})()

*/