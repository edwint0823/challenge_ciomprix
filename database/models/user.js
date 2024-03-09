'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.belongsToMany(models.User_Subject, {through: 'users_subjects', foreignKey: 'user_id'})
            User.belongsToMany(models.Evidence_Record, {through: 'evidence_records', foreignKey: 'user_id'})
        }
    }

    User.init({
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING(100),
            unique: true,
        },
        dni: DataTypes.STRING(50),
        phone_number: DataTypes.STRING(20),
        password: {
            type: DataTypes.STRING,
            unique: true,
        },
        birth_date: DataTypes.DATEONLY,
        is_admin: DataTypes.BOOLEAN,
        is_student: DataTypes.BOOLEAN,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'User',
        tableName: 'users',
    });
    return User;
};