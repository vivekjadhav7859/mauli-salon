const { comparePassword, hashPassword } = require("../helpers/authHelper.js");
const userModel = require("../models/userModel.js");
const JWT = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    const { name, email, password, address, phone } = req.body;
    if (!name) {
      return res.send({ success: false, message: "Name required!!!" });
    }
    if (!email) {
      return res.send({ success: false, message: "Email required!!!" });
    }
    if (!password) {
      return res.send({ success: false, message: "Password required!!!" });
    }
    if (!address) {
      return res.send({ success: false, message: "Address required!!!" });
    }
    if (!phone) {
      return res.send({ success: false, message: "Phone required!!!" });
    }

    //check if user already exits
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "You have already Registered, please login",
      });
    }

    //register new user
    const hashedPassword = await hashPassword(password);
    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    }).save();

    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(500).send({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    //check user in DB
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(500).send({
        success: false,
        message: "Email is not registered",
      });
    }

    //compare password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }

    //token
    const token = await JWT.sign({ _id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Login Successful",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Login",
      error,
    });
  }
};

module.exports = {
  registerController,
  loginController,
};
