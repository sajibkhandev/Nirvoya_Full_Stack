require('dotenv').config()
const express=require("express")
const port=8000
const mongodbConfig=require('./config/mongodbConfig')
mongodbConfig()
const app=express()
var cors = require('cors')
const route=require('./routes')
const path=require("path")


app.use(cors())
app.use(express.json())
app.use(route)
app.use('/uploads',express.static(path.join(__dirname,"uploads")))

app.listen(port,()=>{
    console.log("Port is Runing");
})