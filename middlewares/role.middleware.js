

exports.checkAdminRole = async (req,res, next)=>{
    let token = req.headers.authorization

    if(token && token.includes('bearer')){
        token = req.headers.authorization.split(" ")[1]
    }

    const payload = jwt.verify(token, process.env.SECRET_KEY)

    if(!payload.id == 'admin'){
        res.status(400).json({
            message: "you dont have access to this data"
        })
    }


}

export