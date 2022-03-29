const jwt = require('jsonwebtoken')


const tokenGen = (id)=>{
    return jwt.sign({id: id}, process.env.SECRET_KEY,{expiresIn: process.env.EXPIRE_IN})
}










module.exports = {
    tokenGen
}