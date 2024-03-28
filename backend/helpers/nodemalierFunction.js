const nodemailer = require("nodemailer");

 const transporter = nodemailer.createTransport({
        service: "gmail",
        secure: false, 
        auth: {
          user: process.env.NODE_MAILER_USER_EMAIL,
          pass: process.env.NODE_MAILER_USER_PASSWORD,
        },
      });


      function sendEmail(email,subject,html){
        return  transporter.sendMail({
        from: process.env.NODE_MAILER_USER_EMAIL, // sender address
        to: email, // list of receivers
        subject: subject, // Subject line
        html: html, // html body
      });

      }


module.exports={transporter,sendEmail}
