const userSchema = require("../models/userSchema");
const nodemailer = require("nodemailer");
var jwt = require('jsonwebtoken');

const forgetPasswordController = async (req, res) => {
    const { email } = req.body

    let findEmail = await userSchema.findOne({ email: email })
    if (findEmail) {
        var token = jwt.sign({ email: email }, 'sajib');
        // console.log(token);
        const transporter = nodemailer.createTransport({
            service: "gmail",
            secure: false,
            auth: {
                user: process.env.NODE_MAILER_USER_EMAIL,
                pass: process.env.NODE_MAILER_USER_PASSWORD,
            },
        });
        const info = await transporter.sendMail({
            from: process.env.NODE_MAILER_USER_EMAIL, // sender address
            to: email, // list of receivers
            subject: "Forget Password", // Subject line
            html: `<a href="http://localhost:5173/changepassword/${token}">Click here to change you password</a>`, // html body
        });

        res.send({success:"Send email for chanage password"})


    } else {
        res.send({ error: `You don't have account this ${email}` })
    }

}
module.exports = forgetPasswordController