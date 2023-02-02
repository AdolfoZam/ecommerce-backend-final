const AuthServices = require("../services/auth.services");
const transporter = require("../utils/mailer");
const jwt = require('jsonwebtoken');
const CarService = require('../services/car.services');

const register = async (req, res, next) => {
  try {
    const user = req.body;
      const result = await AuthServices.register(user);
      if (result) {
      res.status(201).json({ message: "User created" });
      await transporter.sendMail({
        to: result.email,
        from: "adolfozamora1005@gmail.com",
        subject: "email confirmation",
        html: "<h1> Bienvenido a la mejor tienda On-Line Pikos & Pikitos</h1> <p> por favor confirma tu email </p><p>haz click en el siguiente <a href='#' 'target=' new_blank'> enlace </a>",
      });
      const { id } = result;
      await CarService.add(id)
    } else {
      res.status(400).json({ message: "something went wrong" });
    }
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({
        error: "Missing data",
        message: "Not email provided",
      });
    }
    if (!password) {
      return res.status(400).json({
        error: "Missing data",
        message: "Not password provided",
      });
    }
    const result = await AuthServices.login({ email, password });
    if (result.wrongEmail) {
      res.status(400).json({ message: "Email invalid, please verify" });
    }
    if (result.wrongPassword) {
      res.status(400).json({ message: "Password invalid, please verify" });
    }
    if (result.isValid) {
      const { username, id, email } = result.user;
      const userData = { username, id, email };
      const token = AuthServices.genToken(userData);
        userData.token = token;
      res.json(userData);
      }
  } catch (error) {
    next({ message: "Something went wrong" });
  }
};

module.exports = {
  register,
  login,
};
