require('dotenv').config()
const express=require("express")
const app=express()
const port=8000
const route=require('./routes')

app.use(route)
app.listen(port,()=>{
    console.log("Port is Runing");
})