const User = require('../models/user');



exports.getAllUsers= async (req,res)=>{
    try {

        const users = await User.findAll()

        if(!users){
            res.status(204).json({
                message: 'no user found'
            })
        }

        res.status(200).json({
            message: 'success',
            user: users
        })

    }catch (error){
        res.send(error)

    }
}


exports.updateUser = async (req,res)=>{
    
}







exports.updateUserRole = async (req,res)=>{
        try {
            const role = req.body.role

            if(!role){

            }
        } catch (error) {
            
        }
}