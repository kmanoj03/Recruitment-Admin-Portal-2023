const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    userName: {
        type: String
    },
    password: {
        type: String
    }
})

module.exports = mongoose.model('adminUser', adminSchema)