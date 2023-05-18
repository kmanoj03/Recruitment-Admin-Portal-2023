const express = require('express')
const path = require("path");
const bodyparser = require('body-parser');
const app = express();

app.use('/',express.static(path.join(__dirname, 'static')));
app.use(bodyparser.json());

const adminRoute = require('./routes/adminLogin.js')
const uploadRoute = require('./routes/questionUpload.js') 

app.use('/admin', adminRoute)
app.use('/upload', uploadRoute)

app.use((err, req, res, next) => {
    console.log(err);

    if (typeof err == 'string') {
      return res.status(400).send({
        message: err,
      });
    }

    return res.status(400).send({
      message: err.message,
    });
  });

module.exports = app