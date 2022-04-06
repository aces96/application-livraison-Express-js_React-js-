const express = require("express")
const {checkLivreurRole, checkAdminRole} = require('../middlewares/role.middleware')
const Router = express.Router()
const {getAllOrders,submitOrder,updateOrderStatus,deleteOrder} = require('../controllers/order.controller')


Router.route('/order')
        .get(checkLivreurRole,getAllOrders)
        .post(submitOrder)

Router.route('/order/:id')
        .put(checkAdminRole,updateOrderStatus)
        .delete(deleteOrder)


module.exports = Router