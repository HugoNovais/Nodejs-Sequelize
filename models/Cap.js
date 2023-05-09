const {DataTypes} = require("sequelize");
const sequelize = require("../config/sequelize");

const Cap = sequelize.define('caps', {
    name: DataTypes.STRING,
    cpf: DataTypes.INTEGER,
});

module.exports = Cap;