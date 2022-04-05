const express = require("express")
const Router = express.Router()
const {getAllRepas,createRepas,updateRepas,deleteRepas, upload} = require('../controllers/repas.controller')


Router.route('/repas')
        .get(getAllRepas)
        .post(upload.single('image'),createRepas)

Router.route('/repas/:id')
        .put(updateRepas)
        .delete(deleteRepas)


module.exports = Router