const express = require('express')

const router = express.Router()

const signUp = require('../handlers/adminAuth.js')
const logIn = require('../handlers/adminAuth.js')

router.post('/signup', signUp.signupFunction)
router.post('/login', logIn.loginFunction)

module.exports = router