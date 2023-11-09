const mongoose=require("mongoose");
require('dotenv').config();

require('./db')

mongoose.connect(process.env.mongo_URL).then(
    ()=>{
        console.log("connected to DB")
    }
).catch((err)=>{
    console.log('could not connect to db'+err)
})