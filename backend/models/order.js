const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db')


class Order extends Model{}

Order.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    status: {
        type: DataTypes.ENUM,
        values: ['accepted', 'in progress', 'delivered'],
        defaultValue: 'accepted'
    },

    address: {
        type: DataTypes.STRING,
        allowNull: false

    }
},
{
    sequelize: sequelize,
    modelName: 'Order'
})




module.exports = Order;