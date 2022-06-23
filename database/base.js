const  Sequelize  = require('sequelize');

const sequelize = new Sequelize('projet_banque', 'Affou', '12345', {
    dialect:  'mysql' ,
    host: '192.168.64.2'
});
module.exports =sequelize;