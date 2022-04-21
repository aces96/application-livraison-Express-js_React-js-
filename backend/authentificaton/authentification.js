const User = require("../models/user")
const jwt = require("jsonwebtoken")
const dotenv = require('dotenv').config();
const {logger} = require('../utils/logger/logger')



exports.signUp = async (req, res)=>{

    
    try {
        

        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,
            telephone: req.body.telephone,
        })
        
        const token = jwt.sign({id: user.id, role: user.role}, process.env.SECRET_KEY, {expiresIn: process.env.EXPIRE_IN})
        
        logger.log('info', '')
        res.status(201).json({
            user: user,
            token: token
        })
        
    } catch (error) {
        logger.log('error', error)
        res.send(error)
        
    }

}



exports.signIn = async (req,res)=>{

    try {
        const {email, password} = req.body

        const user = await User.findOne({where: {email: email}})
    
        if(!user || !user.password == password){
            logger.log('info', 'email or password not correct')
            res.status(401).json({
                message: 'email or password not correct'
            })
        }else {
            const token = jwt.sign({id: user.id, role: user.role}, process.env.SECRET_KEY, {
                expiresIn: process.env.EXPIRE_IN
            })

            logger.log('info', 'success')
            res.status(201).json({
                message: 'success',
                token: token
            })
            
        }


    } catch (error) {
        logger.log('error', error)
        res.status(401).send(error)
        
    }


}