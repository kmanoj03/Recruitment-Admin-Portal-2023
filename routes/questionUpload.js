const express = require('express')
const router = express.Router();

const qnUpload = require('../handlers/retrieveData.js')

router.post('/question', qnUpload.retrieveData)

module.exports = router