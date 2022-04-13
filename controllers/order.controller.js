const {Order,Repas,RepasOrder} = require('../config/migration')
const {logger} = require('../utils/logger/logger')
const jwt = require('jsonwebtoken')




const decodeToken = (token)=>{
    return jwt.verify(token, process.env.SECRET_KEY)
}



exports.getAllOrders = async (req,res)=>{
    try {
        const orders = await Order.findAll()

        if(!orders){
            res.status(204).json({
                message: 'no orders found'
            })
            logger.log('info', 'no orders found')
        }

        res.status(200).json({
            message: 'success',
            orders: orders
        })
        logger.log('info', 'success')

        
    } catch (error) {
        logger.log('error', 'error while getting all orders')
        res.send(error)
        
    }
}


exports.submitOrder = async (req,res)=>{
    try {
        const token = req.headers.authorization.split(' ')[1]
        const payload = decodeToken(token)
        const {repas, address, quantity} = req.body        
        const order =  await Order.create({address : address, UserId: payload.id })
        const Norder = await Order.findOne({where: {UserId: payload.id}})

        // if(repas.length > 1){
        //     for(i=0; i<repas.length; i++){
        //         const repa = await Repas.findOne({where: {name: repas[i].repas}})
        //         console.log(repa);
    
        //         const repasOrder  = await RepasOrder.create({
        //             quantity: e.quantity,
        //             RepaId: repa.id,
        //             OrderId: Norder.id
        //         })
                
        //     }
        // }


        const repa = await Repas.findOne({where: {name: repas}})
        console.log(repa.id);
        const repasOrder  = await RepasOrder.create({
            quantity: quantity,
            RepaId: repa.id,
            OrderId: Norder.id
        })
        res.status(200).json({
            message: 'order submited successfully',
            order: order
        })
    } catch (error) {
        res.send(error)
        logger.log('error', 'error while submit order')
    }

}


exports.addLivreur = async (req,res)=>{
    const idLivreur = req.body.id
    const idOrder = req.params.id

    

    const order = await Order.update({livreurIdId: idLivreur}, {where: {id: idOrder}})

    res.json({
        message: 'success',
        order
    })
 
}




exports.updateOrderStatus = async (req,res)=>{
    const id = req.params.id
    const {status} = req.body

    try {
        if(!status || !id){
            res.status(400).json({
                message: 'please insert a status or id'
            })
            logger.log('info', 'error while getting all orders')

        }


        const updateStatus = await Order.update({status: status}, {where: {id: id}})

        res.status(200).json({
            message: 'status updated successfully',
            updateStatus
        })
        logger.log('info', 'status updated successfully')

    } catch (error) {
        res.send(error)
        logger.log('error', 'error when updating order status ')
        
    }
}



exports.deleteOrder = async (req,res)=>{
    const id = req.params.id

    try {
        const order = await Order.destroy({where:{id:id}})

        res.status(200).json({
            message: 'order deleted successfully',
            order
        })
        logger.log('info', 'order deleted successfully')

    } catch (error) {
        res.send(error)
        logger.log('error', 'error when deleting order')

    }
}

