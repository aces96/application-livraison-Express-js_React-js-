const Categorie = require('../config/migration')



exports.getAllCategorie = async (req,res)=>{
        try {
            const categorie = await Categorie.findAll()

            if(!categorie){
                res.status(204).json({
                    message: 'no categorie found'
                })
            }

            res.status(200).json({
                message: 'success',
                categorie: categorie
            })
        } catch (error) {
            res.send(error)
        }
}



exports.addCategorie = async (req,res)=>{
        const {type} = req.body.type

        if(!type){
            res.status(400).json({
                message: 'please insert a categorie type',
            })
        }

        res.status(200).json({
            message: 'categorie its added successfully',
            categorie: categorie
        })

        const categorie = await Categorie.create({
            type: type
        })
}



exports.updateCategorie = async (req,res)=>{

        try {
            const id = req.params.id

            const type = req.body.type
    
            if(!type){
                res.status(400).json({
                    message: 'please insert a categorie type',
                })
            }
    
            const categorie = await Categorie.update({type: type}, {where: {id: id}})
    
            res.status(200).json({
                message: 'categorie updated successfully',
                categorie: categorie
            })
        } catch (error) {
            res.send(error)
        }
}



exports.deleteCategorie = async (req,res)=>{

        try {
            const id = req.params.id

            const categorie = await Categorie.destroy({where: {id: id}})

            res.status(200).json({
                message : 'categorie deleted successfully',
            })
            
        } catch (error) {
            res.send(error)
        }
}