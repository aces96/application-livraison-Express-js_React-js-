const express = require("express")
const {checkAdminRole} = require('../middlewares/role.middleware')
const Router = express.Router()
const {getAllRepas,createRepas,updateRepas,deleteRepas, upload} = require('../controllers/repas.controller')


Router.route('/repas')
        .get(getAllRepas)
        .post(checkAdminRole,upload.single('image'),createRepas)

Router.route('/repas/:id')
        .put(checkAdminRole,updateRepas)
        .delete(checkAdminRole,deleteRepas)


module.exports = Router