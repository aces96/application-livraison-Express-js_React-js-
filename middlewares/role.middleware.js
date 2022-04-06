

exports.checkAdminRole =  (req,res, next)=>{
    let token = req.headers.authorization

    if(!token){
        res.status(400).json({
            message: 'you dont have access to this service'
        })
    }else{
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



exports.checkLivreurRole = (req,res,next)=>{
    let token = req.headers.authorization

    if(!token){
        res.status(400).json({
            message: 'you dont have access to this service'
        })
    }else{
        token = req.headers.authorization.split(" ")[1]
    }

    const payload = jwt.verify(token, process.env.SECRET_KEY)

    if(!payload.role == 'livreur'){
        res.status(400).json({
            message: "you dont have access to this service"
        })
    }else if(payload.role == 'livreur'){
        next()
    }

} 

