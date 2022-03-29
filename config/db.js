const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(
    'application livraison',
    'root',
    null,
    {host: 'localhost', dialect: 'mysql'}
)


module.exports = sequelize