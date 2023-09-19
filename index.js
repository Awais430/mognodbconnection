const express=require("express");
const mongoose=require("mongoose");
const app=express();
const port=3001;
app.listen(()=>{
    console.log(`server port ${port}`)
})
mongoose.connect(process.env.MONGO-URL).
then(()=> console.log("connected"))
.catch((err)=>console.log(`eror ${err}`))