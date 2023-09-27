const sequelize = require("sequelize");

const connection = require("../database/database");

const Categoria = connection.define('Categoria', {
    codigo_categoria: {
        type: sequelize.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    nome_categoria: {
        type: sequelize.DataTypes.STRING(255),
        allowNull: false,
    },
    observacoes_categoria: {
        type: sequelize.DataTypes.TEXT,
        allowNull: false,
    },
});



module.exports = Categoria;