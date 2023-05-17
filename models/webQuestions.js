var mongoose = require('mongoose');

var webQSchema = new mongoose.Schema({
    SNo:{
        type:Number
    },
    Question:{
        type:String
    },
    OptionA:{
        type:String
    },
    OptionB:{
        type:String
    },
    OptionC:{
        type:String
    },
    OptionD:{
        type:String
    },
    Answer:{
        type:String
    }
})

module.exports = mongoose.model('webQuestions', webQSchema);