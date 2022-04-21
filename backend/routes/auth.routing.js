const express = require("express")
const Router = express.Router()
const {signUp,signIn} = require('../authentificaton/authentification')



Router.route("/signup")
        .post(signUp)




Router.route('/signin')
        .post(signIn)



module.exports = Router