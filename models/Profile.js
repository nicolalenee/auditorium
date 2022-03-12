const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Profile extends Model {}

Profile.init (
    {    
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        occupation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        industry: {
            type: DataTypes.STRING,
            allowNull: false
        },
        band_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        website_url: {
            type: DataTypes.STRING,
            allowNull: true
        },
        bio: {
            type: DataTypes.STRING,
            allowNull: false
        },
        media: {
            type: DataTypes.STRING,
            allowNull: true
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone_number: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }  
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'profile'
           
    }
);

module.exports = Profile;