const nodemailer = require('nodemailer');
//contraseña de aplicacion
require("dotenv").config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: "465",
    secure: true,
    auth: {
        user: "adolfozamora1005@gmail.com",
        pass: process.env.G_PASSWORD,
    },
});

module.exports = transporter;

