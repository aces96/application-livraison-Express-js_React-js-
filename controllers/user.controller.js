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
    try {
        const id = req.params.id
        const data = req.body

        const user = await User.update(data, {where: {id: id}})

        res.status(200).json({
            message: 'user updated successfully',
            user: user
        })
        
    } catch (error) {
        
    }
    
}




exports.deleteUser = async (req,res)=>{
    try {
        const id = req.params.id
        const user = await User.destroy({where: {id: id}})

        res.status(200).json({
            message: 'user deleted successfully'
        })
    } catch (error) {
        res.send(error)
        
    }
}







exports.updateUserRole = async (req,res)=>{
        try {
            const id = req.params.id
            const role = req.body.role

            if(!role){
                res.json({
                    message: 'please insert a role',
                })

            }

            const user = await User.update({role: role}, {where: {id: id}})

            res.status(200).json({
                message: 'success',
                user: user

            })
        } catch (error) {
            res.send(error)
            
        }
}