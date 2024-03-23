require('dotenv').config()
const express=require("express")
var cors = require('cors')
const app=express()
const port=8000
const mongodbConfig=require('./config/mongodbConfig')
const route=require('./routes')


mongodbConfig()
app.use(cors())
app.use(express.json())
app.use(route)

app.listen(port,()=>{
    console.log("Port is Runing");
})