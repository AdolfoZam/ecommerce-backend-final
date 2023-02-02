const { users, car } = require('../models');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class AuthServices {
  static async register(user) {
    try {
      const result = await users.create(user);
      console.log(result)
      const { id } = result;
      await car.create({ user_id: id });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async login(credentials) {
    try {
      const { email, password } = credentials;
      const user = await users.findOne({ 
        where: { email }
       });
      if (user) {
        const isValid = bcrypt.compareSync(password, user.password);
        return isValid ? { isValid, user } : { isValid, wrongPassword: true };
      }
      return { isValid: false, wrongEmail: true };
    } catch (error) {
      throw error;
    }
  }

  static genToken(data) {
    try {
      const token = jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: "10m",
        algorithm: "HS512",
      });
      return token;
      } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthServices;