const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Professions extends Model {}

Professions.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        profile_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'profession'
    }
);

module.exports = Professions;