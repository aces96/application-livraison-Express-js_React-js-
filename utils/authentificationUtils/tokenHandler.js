const jwt = require('jsonwebtoken')


const tokenGen = (id)=>{
    return jwt.sign({id,role}, process.env.SECRET_KEY,{expiresIn: process.env.EXPIRE_IN})
}










module.exports = {
    tokenGen
}