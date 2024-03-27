const nodemailer = require("nodemailer");
const nodemailer1=async({email,otp})=>{
    const transporter = nodemailer.createTransport({
        service: "gmail",
        secure: false, 
        auth: {
          user: "sajib562341@gmail.com",
          pass: "mmjz sdli yzin rewl",
        },
      });
      const info = await transporter.sendMail({
        from: 'sajib562341@gmail.com', // sender address
        to: email, // list of receivers
        subject: "Email Verified", // Subject line
        html: `<p>
        This is your otp code:<b>${otp}</b></p>`, // html body
      });

}
module.exports=nodemailer1