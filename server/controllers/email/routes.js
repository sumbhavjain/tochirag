const express= require('express');
const router= express.Router();
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

    const transport = nodemailer.createTransport(smtpTransport({
        service: "gmail",
        auth: {
            user: 'cmsquiz.5@gmail.com',
            pass: 'QUIZCMS@PIET'
        }
    }))
    
    module.exports.email = (from, to, subject, message) => {
        let mail = {
          from: from,
          to: to,
          subject: subject,
          text: message
        }
        transport.sendMail(mail, (error, response) => {
          if(error){
              console.log(error);
          }
          else{
              console.log("Email sent: " + response)
          }
          transport.close();
        });
      }


