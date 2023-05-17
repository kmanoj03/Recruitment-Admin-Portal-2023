const app = require('./app.js')
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://mongo:mongo03@cluster0.wjds4xu.mongodb.net/recruitments-admin", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() =>
    console.log("Database is connected!"))
.catch((error) =>
    console.log(error))


app.listen(3000, () => {
    console.log("Server is up on Port 3000!");
})
