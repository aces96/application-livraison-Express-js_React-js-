const {Order,Repas,Facture,RepasOrder} = require('../config/migration')
const nodemailer = require("nodemailer");


exports.createFacture = async (req,res)=>{
    const orderId = req.params.id
    const totalPrice = req.body.totalPrice
    const order = await Order.findOne({where:{id: orderId}})
    const repasOrder = await RepasOrder.findAll({where: {OrderId: orderId}})
    const repas = await Repas.findAll({where: {id: repasOrder.RepaId}})

    if(!order.status == 'delivered'){
        res.status(400).json({
            message: 'order status its not delivered you cant create facture'
        })
    }

    const facture = await Facture.create({
        total_price: totalPrice,
        OrderId: orderId
    })


    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, 
        auth: {
          user: `nOOne0001@outlook.fr`, 
          pass: `noone@@..`, 
        },
      });

      let info = await transporter.sendMail({
        from: '"nOOne 👻" nOOne0001@outlook.fr', 
        to: "esraidi12@gmail.com", 
        subject: "facture de l'ordre",
        text: "test", 
        html: "<b>Hello world?</b>", 
      });



    res.status(200).json({
        message: 'facture created successfully'
    })
}