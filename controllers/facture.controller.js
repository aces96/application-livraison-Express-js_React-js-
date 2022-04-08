const {Order,Repas,Facture,RepasOrder,User} = require('../config/migration')
const {logger} = require('../utils/logger/logger')
const nodemailer = require("nodemailer");


exports.createFacture = async (req,res)=>{
    const orderId = req.params.id
    const totalPrice = req.body.totalPrice
    const order = await Order.findOne({raw: true},{where:{id: orderId}})
    const user = await User.findOne({where: {id: order.UserId}})
    const repasOrder = await RepasOrder.findAll({raw: true},{where: {OrderId: orderId}})
    console.log(repasOrder)
    const repas = await Repas.findAll({raw: true}, {where: {id: repasOrder.RepaId}})

    // if(!order.status == 'delivered'){
    //     res.status(400).json({
    //         message: 'order status its not delivered you cant create facture'
    //     })
    // }
    try {
        const facture = await Facture.create({
            total_price: totalPrice,
            OrderId: orderId
        })
    
    
        let transporter = nodemailer.createTransport({
            host: "smtpout.secureserver.net",
            secure: false,
            secureConnection: false, // TLS requires secureConnection to be false
            tls: {
            ciphers: "SSLv3",
            },
            requireTLS: true,
            port: 465,
            service: 'outlook',
            debug: true, 
            auth: {
            user: `achesr001@outlook.com`, 
            pass: `noone@@..`, 
            },
        });
    
        let info = await transporter.sendMail({
            from: '"nOOne 👻" nOOne0001@outlook.fr', 
            to: "esraidi12@gmail.com", 
            subject: "facture de l'ordre",
            text: "test", 
            html: `<b>Facture de l'order</b>
                    ${user.email}
                    salma`, 
        });
    
    
        logger.log('info', 'facture created successfully and the email is sent')
        res.status(200).json({
            message: 'facture created successfully'
        })
        
    } catch (error) {
        logger.log('error', error)
        res.send(error)
        
    }

}