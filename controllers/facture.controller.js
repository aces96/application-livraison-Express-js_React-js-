const Order = require('../models/order')
const Facture = require('../models/facture')    



exports.createFacture = async (req,res)=>{
    const orderId = req.params.id
    const totalPrice = req.body.totalPrice
    const order = await Order.findOne({where:{id: orderId}})

    if(!order.status == 'delivered'){
        res.status(400).json({
            message: 'order status its not delivered you cant create facture'
        })
    }

    const facture = await Facture.create({
        total_price: totalPrice,
        OrderId: orderId
    })

    res.status(200).json({
        message: 'facture created successfully'
    })
}