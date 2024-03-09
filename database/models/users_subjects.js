'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Users_Subjects extends Model {
        static associate(models) {
        }
    }

    Users_Subjects.init({
        user_id: DataTypes.INTEGER,
        subject_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Users_Subjects',
        tableName: 'users_subjects',
    });
    return Users_Subjects;
};