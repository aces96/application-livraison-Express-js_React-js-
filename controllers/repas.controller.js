const {Repas, Categorie} = require('../config/migration')
const {logger} = require('../utils/logger/logger')
const multer = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/images')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
    })
exports.upload = multer({ storage: storage })






exports.getAllRepas = async (req,res)=>{
        try {
            const repas = await Repas.findAll()

            if(!repas){
                logger.log('info','no repas found')
                res.status(204).json({
                    message: 'no repas found'
                })
            }
            logger.log('info', 'success')
            res.status(200).json({
                message: 'success',
                repas: repas
            })

            
        } catch (error) {
            logger.log('error', error)
            res.send(error)
            
        }
}

exports.createRepas = async (req,res)=>{
        try {

            const {name,description,prix, categorie} = req.body
            const image = req.file.path
            console.log(image);

            const categorieId = await Categorie.findOne({where: {type: categorie}})
        
            const repas = await Repas.create({
                name: name,
                image: image,
                description: description,
                prix: prix,
                CategorieId: categorieId.id
            })
            logger.log('info', 'repas created successfully')
            res.status(200).json({
                message: 'repas created successfully',
                repas: repas
            })
            
        } catch (error) {
            logger.log('error', error)
            res.send(error)
        }

}


exports.updateRepas = async (req,res)=>{
        try {
            const id = req.params.id
            const data = req.body

            const repas = await Repas.update(data,{where: {id: id}})
            logger.log('info', 'repas updated successfully')
            res.status(200).json({
                message: 'repas updated successfully',
                repas: repas
            })
        } catch (error) {
            logger.log('info', error)
            res.send(error)
            
        }
}


exports.deleteRepas = async (req,res)=>{
        try {
            const id = req.params.id

            const repas = await Repas.destroy({where: {id: id}})
            logger.log('info', 'repas deleted successfully')
            res.status(200).json({
                message: 'repas deleted successfully'
            })
        } catch (error) {
            logger.log('error', error)
            res.send(error)
            
        }
}


exports.getRepasByType = async(req,res)=>{
    const {type} = req.body.type

    if(!type){
        logger.log('info', 'please insert a categorie')
    }

    try {
        const categorie = await Categorie.findOne({where: {type: type}})

        const repas = await Repas.findAll({where: {CategorieId: categorie.id}})
        logger.log('info', 'success')
        res.status(200).json({
            repas: repas,
        })
    } catch (error) {
        
    }
}