const express = require("express")
const Router = express.Router()
const {getAllOrders,submitOrder,updateOrderStatus,deleteOrder} = require('../controllers/order.controller')


Router.route('/order')
        .get(getAllOrders)
        .post(submitOrder)

Router.route('/order/:id')
        .put(updateOrderStatus)
        .delete(deleteOrder)


module.exports = Router