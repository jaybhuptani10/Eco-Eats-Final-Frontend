require("dotenv").config();
require('express-async-errors');

const connectDB = require("./db/connect");
const express = require('express');
const cors = require('cors');
const mainRouter = require("./routes/user");
const app = express();


app.use(express.json());

app.use(cors({origin: "https://eco-eats-delta.vercel.app",
methods:["GET","POST"],
credentials:true}))
app.use("/api",mainRouter);



const start = async() =>{
    try{
        await connectDB(process.env.MONGO_URI);
        
    } catch(error){
        console.log(error);
    }
}

start();