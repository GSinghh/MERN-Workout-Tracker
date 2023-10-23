const express = require('express')
const router = express.Router();

const {
    loginUser,
    signupUser,
} = require('../controller/userController')

//Login User
router.post('/login', loginUser);

//Signup User
router.post('/signup', signupUser);

module.exports = router;