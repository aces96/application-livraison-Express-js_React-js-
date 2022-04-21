const express = require("express")
const {checkLivreurRole, checkAdminRole} = require('../middlewares/role.middleware')
const Router = express.Router()
const {getAllOrders,submitOrder,updateOrderStatus,deleteOrder, addLivreur} = require('../controllers/order.controller')


Router.route('/order')
        .get(checkLivreurRole,getAllOrders)
        .post(submitOrder)

Router.route('/order/:id')
        .put(updateOrderStatus)
        .delete(deleteOrder)

Router.route('/order/livreur/:id')
        .put(addLivreur)


module.exports = Router