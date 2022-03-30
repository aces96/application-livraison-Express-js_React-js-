const Order = require('../../models/order')
const Repas = require('../../models/repas')
const multer = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/images')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname)
    }
    })
exports.upload = multer({ storage: storage })





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


exports.createRepas = async (req,res)=>{
        try {

            const {name,description,prix} = req.body
            const image = req.file.path
        
            const repas = await Repas.create({
                name: name,
                image: image,
                description: description,
                prix: prix
            })

            res.status(200).json({
                message: 'repas created successfully',
                repas: repas
            })
            
        } catch (error) {
            res.send(error)
        }

}


exports