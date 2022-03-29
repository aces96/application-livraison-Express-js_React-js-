const User = require("../models/user")
const tokenGen = require('../utils/authentificationUtils/tokenHandler')



exports.signUp = async (req, res)=>{
    try {

        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,
            telephone: req.body.telephone
        })

        const token = tokenGen(user.id)

        res.status(201).json({
            user: user,
            token: token
        })
        
    } catch (error) {

        res.send(error)
        
    }

}



exports.signIn = (req,res)=>{

    try {
        const {email, password} = req.body

        const user = await User.findOne({email})
    
        if(!user || !user.password == password){
            res.status(401).json({
                message: 'email or password not correct'
            })
        }

        const token = tokenGen(user.id)

        res.status(201).json({
            message: 'success',
            token: token
        })
        
    } catch (error) {

        res.status(401).send(error)
        
    }


}