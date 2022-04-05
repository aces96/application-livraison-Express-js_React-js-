

exports.checkAdminRole = async (req,res, next)=>{
    let token = req.headers.authorization

    if(token && token.includes('bearer')){
        token = req.headers.authorization.split(" ")[1]
    }

    const payload = jwt.verify(token, process.env.SECRET_KEY)

    if(!payload.role == 'admin'){
        res.status(400).json({
            message: "you dont have access to this data"
        })
    }else if(payload.role == 'admin'){
        next()
    }


}

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