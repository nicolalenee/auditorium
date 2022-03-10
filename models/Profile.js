const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Profile extends Model {}

Profile.init (
    {    
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        occupation: {
            type: Datatypes.STRING,
            allowNull: false
        },
        industry: {
            type: Datatypes.STRING,
            allowNull: false
        },
        band_name: {
            type: Datatypes.STRING,
            allowNull: true
        },
        band_url: {
            type: Datatypes.STRING,
            allowNull: true
        },
        bio: {
            type: Datatypes.STRING,
            allowNull: false
        },
        media: {
            type: Datatypes.STRING,
            allowNull: true
        },
        location: {
            type: Datatypes.STRING,
            allowNull: true
        },
        phone_number: {
            type: Datatypes.INTEGER,
            allowNull: true
        },
        user_id: {
            type: Datatypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'profile'
    }
);

module.exports = Profile;