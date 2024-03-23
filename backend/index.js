require('dotenv').config()
const express=require("express")
var cors = require('cors')
const app=express()
app.use(cors())
const port=8000
app.use(express.json())

const route=require('./routes')

app.use(route)
app.listen(port,()=>{
    console.log("Port is Runing");
})