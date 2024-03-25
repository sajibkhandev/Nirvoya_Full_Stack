const express=require("express")
const registrationController = require("../../controllers/registrationController")
const secureApi = require("../../middleware/secureApi")
const otpController = require("../../controllers/otpController")
const _=express.Router()

_.post("/registration",secureApi,registrationController)
_.post("/otp",otpController)


module.exports=_
