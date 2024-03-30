require("dotenv").config();
require('express-async-errors');

const connectDB = require("./db/connect");
const express = require('express');
const cors = require('cors');
const mainRouter = require("./routes/user");
const app = express();


app.use(express.json());

app.use(cors())
app.use("/api",mainRouter);

const port = process.env.PORT || 3000;

const start = async() =>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log(`server on ${port}`);
        })
    } catch(error){
        console.log(error);
    }
}

start();