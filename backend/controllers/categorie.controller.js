const Categorie = require('../config/migration')
const {logger} = require('../utils/logger/logger')



exports.getAllCategorie = async (req,res)=>{
        try {
            const categorie = await Categorie.findAll()

            if(!categorie){
                logger.log('info', 'no categorie found')
                res.status(204).json({
                    message: 'no categorie found'
                })
            }
            logger.log('info', 'success')
            res.status(200).json({
                message: 'success',
                categorie: categorie
            })

        } catch (error) {
            logger.log('error', error)
            res.send(error)
        }
}



exports.addCategorie = async (req,res)=>{
        const {type} = req.body.type
        if(!type){
            logger.log('info', 'please insert a categorie type')
            res.status(400).json({
                message: 'please insert a categorie type',
            })

        }
        
        const categorie = await Categorie.create({
            type: type
        })

        logger.log('info', 'categorie its added successfully')
        res.status(200).json({
            message: 'categorie its added successfully',
            categorie: categorie
        })
        


}



exports.updateCategorie = async (req,res)=>{

        try {
            const id = req.params.id

            const type = req.body.type
    
            if(!type){
                logger.log('info', 'please insert a categorie type')
                res.status(400).json({
                    message: 'please insert a categorie type',
                })
            }
    
            const categorie = await Categorie.update({type: type}, {where: {id: id}})
            logger.log('info', "categorie updated successfully")
            res.status(200).json({
                message: 'categorie updated successfully',
                categorie: categorie
            })
        } catch (error) {
            logger.log('error', error)
            res.send(error)
        }
}



exports.deleteCategorie = async (req,res)=>{

        try {
            const id = req.params.id

            const categorie = await Categorie.destroy({where: {id: id}})
            logger.log('info', 'categorie deleted successfully')
            res.status(200).json({
                message : 'categorie deleted successfully',
            })
            
        } catch (error) {
            logger.log('error', error)
            res.send(error)
        }
}