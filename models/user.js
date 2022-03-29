const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db')

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },

    firstName: {
        type: DataTypes.STRING,
        allowNull: false

    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    telephone: {
        type: DataTypes.STRING,
        allowNull: false
    },

    role: {
        type: DataTypes.ENUM,
        values: ['admin', 'livreur', 'client'],
        defaultValue: 'client',
    },
},
{
    sequelize: sequelize,
    modelName: 'User'
})


module.exports = User