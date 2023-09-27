const sequelize = require("sequelize");

const connection = require("../database/database");

const Produto = connection.define ('Produto', {
    codigo_produto: {
        type: sequelize.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    nome_produto: {
        type: sequelize.DataTypes.STRING(255),
        allowNull: false,
    },
    valor_produto: {
        type: sequelize.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    imagem_produto: {
        type: sequelize.DataTypes.STRING(500),
        allowNull: false,
    },
    descricao_produto: {
        type: sequelize.DataTypes.TEXT,
        allowNull: false,
    },
});

module.exports = Produto;