
exports.emailValidator = (req,res,next)=>{
    const email = req.body.email
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(!regex.test(email)){
        res.status(400).json({
            message: 'please enter a valid email'
        })
    }else{
        next()
    }
}