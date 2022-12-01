const db = require('../db/conn');
const {DataTypes} = require('sequelize');
const Clube = require('./Clube');

const Endereco = db.define('Endereco', {
    logradouro: {type:DataTypes.STRING(1000), allowNull: false},
    cep: {type:DataTypes.STRING(8), allowNull: false},
    numero: {type:DataTypes.STRING(), allowNull: false},
    complemento: {type:DataTypes.STRING, allowNull: true}
});

//Um endereço pertence a um clube
Endereco.belongsTo(Clube);

Clube.hasMany(Endereco);

module.exports = Endereco;