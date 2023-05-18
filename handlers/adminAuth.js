/* eslint-disable @typescript-eslint/no-unused-vars */
// require('dotenv').config(); 
const Admin = require("../models/admin.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = 'fsbfjghbesdkuyghsebkhjgzbjh4h5r87r3g4gusehfbjdsbgehjkbnjshgbjkshbf'

async function signupFunction(req, res){
    try{
        const { userName: upperUserName , password: plainTextPassword} = req.body

        // console.log(userName, password);
       
        const userAlreadyExists = await Admin.findOne({
            userName: req.body.userName.toUpperCase()
        })

        

        var flag = 0
        if (userAlreadyExists && req.body.regno !== undefined) {
            throw new Error("The username is already registered!")
            flag++;
        }
        
        if (!plainTextPassword || typeof plainTextPassword !== 'string') {
            return res.json({ status: 'error', error: 'Invalid password' })
        }
    
        if (plainTextPassword.length < 5) {
            return res.json({
                status: 'error',
                error: 'Password too small. Should be atleast 6 characters'
            })
        }
        
        const userName = upperUserName.toUpperCase()
        const password =  await bcrypt.hash(plainTextPassword, 10)

        try{    
            if(flag == 0){
                const response = Admin.create({
                    userName,
                    password
                })
                console.log("User Created Successfully: ", response); 
            }
            
        }catch (error){
            if(error.code === 11000){
                return res.json( {status : 'error', error: 'Registration Number Already Exists!' })
            }
            throw error
        }


    } catch (err) {
        console.log(err)
        res.status(400).send({
            message: err.message
        })
    }
}

//Login using userName and Password
async function loginFunction(req, res){

    const { userName: upperUserName, password } = req.body

    const userName = upperUserName.toUpperCase();

    const user = await Admin.findOne({userName}).lean();

    if(!user){
        return res.json({status: 'error', error: 'Invalid Registration Number/Password'})
    }

    if(await bcrypt.compare(password, user.password)){

        const token = jwt.sign(
            {
            id: user._id,
            username: user.userName
            },
            JWT_SECRET
        )
        return res.json({status: 'ok', data: token})

    }

    res.json({status: 'error', error: 'Invalid Registration Number/Password'})

}

module.exports = {
    signupFunction,
    loginFunction
}