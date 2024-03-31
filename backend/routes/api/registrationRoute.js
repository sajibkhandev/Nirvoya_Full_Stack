const express=require("express")
const registrationController = require("../../controllers/registrationController")
const loginController = require("../../controllers/loginController")
const secureApi = require("../../middleware/secureApi")
const otpController = require("../../controllers/otpController")
const _=express.Router()

_.post("/registration",secureApi,registrationController)
_.post("/login",secureApi,loginController)
_.post("/otp",otpController)


module.exports=_
