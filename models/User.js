const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init (
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        email: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [6]
            }
        },
        occupation: {
            type: Datatypes.STRING,
            allowNull: false
        },
        industry: {
            type: Datatypes.STRING,
            allowNull: true
        },
        band_name: {
            type: Datatypes.STRING,
            allowNull: true
        },
        band_url: {
            type: Datatypes.STRING,
            allowNull: true
        },
        location: {
            type: Datatypes.STRING,
            allowNull: true
        }
    },
    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'  
    }
);

module.exports = User;