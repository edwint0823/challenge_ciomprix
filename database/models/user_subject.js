'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User_Subject extends Model {
        static associate(models) {
        }
    }

    User_Subject.init({
        user_id: DataTypes.INTEGER,
        subject_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'User_Subject',
        tableName: 'users_subjects',
        timestamps: false
    });
    return User_Subject;
};