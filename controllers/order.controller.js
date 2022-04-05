const {Order,Repas,RepasOrder} = require('../config/migration')
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
        }

        res.status(200).json({
            message: 'success',
            orders: orders
        })
        
    } catch (error) {
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

        console.log('here')

        const repa = await Repas.findOne({where: {name: repas}})
        console.log(repa);
        console.log(Norder.id)
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
        console.log(error);
    }

}




exports.updateOrderStatus = async (req,res)=>{
    const id = req.params.id
    const {status} = req.body

    try {
        if(!status || !id){
            res.status(400).json({
                message: 'please insert a status or id'
            })
        }


        const updateStatus = await Order.update({status: status}, {where: {id: id}})

        res.status(200).json({
            message: 'status updated successfully',
            updateStatus
        })
    } catch (error) {
        res.send(error)
        
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
    } catch (error) {
        res.send(error)
    }
}

