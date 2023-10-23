const mongoose = require('mongoose');
const User = require('../models/userModel');


const loginUser = async (req, res) => {
    // const {email, password} = req.body;
    res.json({mssg: "Login User Routes"})
}

const signupUser = async (req, res) => {
    res.json({mssg: "Signup User Routes"})
}

module.exports = { signupUser, loginUser }