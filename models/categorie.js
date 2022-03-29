const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db')


class Categorie extends Model{}

Categorie.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    type: {
        type: DataTypes.STRING,
    }
},
{
    sequelize: sequelize,
    modelName: 'Categorie'
}
)



module.exports = Categorie;