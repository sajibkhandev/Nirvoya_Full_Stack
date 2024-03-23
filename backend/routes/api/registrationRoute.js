const express=require("express")
const registrationController = require("../../controllers/registrationController")
const secureApi = require("../../middleware/secureApi")
const _=express.Router()

_.post("/registration",secureApi,registrationController)


module.exports=_
