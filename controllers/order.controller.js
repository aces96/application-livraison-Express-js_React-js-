const Order = require('../../models/order')



exports.getAllOrders = async (req,res)=>{
    try {
        const orders = await Order.findAll()

        if(!orders){
            res.status(204).json({
                message: 'no orders found'
            })
        }

        res.status(200).json({
            message: 'success',
            orders: orders
        })
        
    } catch (error) {
        res.send(error)
        
    }
}