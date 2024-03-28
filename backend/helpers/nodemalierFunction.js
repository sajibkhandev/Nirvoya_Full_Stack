const nodemailer = require("nodemailer");

 const transporter = nodemailer.createTransport({
        service: "gmail",
        secure: false, 
        auth: {
          user: "sajib562341@gmail.com",
          pass: "mmjz sdli yzin rewl",
        },
      });


      function sendEmail(email,subject,html){
        return  transporter.sendMail({
        from: 'sajib562341@gmail.com', // sender address
        to: email, // list of receivers
        subject: subject, // Subject line
        html: html, // html body
      });

      }


module.exports={transporter,sendEmail}
