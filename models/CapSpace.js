const {DataTypes} = require("sequelize");
const sequelize = require("../config/sequelize");

const CapSpace = sequelize.define('caps', 'spaceships', {
    capsId: DataTypes.STRING,
    spaceshipsId: DataTypes.INTEGER,
});

module.exports = CapSpace;