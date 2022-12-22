import dotenv from 'dotenv';
import mailjet from 'node-mailjet';
import template from './template';
import db from '../../database/models';

dotenv.config();

const nodemailer = require('nodemailer');

const sendEmail = async(data, message, subject) =>{
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_APP_PASSWORD
        }   
    })

  await transporter.sendMail({
    from: `${process.env.EMAIL}`, // sender address
    to: `${data.email}`, // list of receivers
    subject: subject, // Subject line
    html: template(message) // html body
  });

}
export default sendEmail