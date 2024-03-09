'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Subjects extends Model {
        static associate(models) {
            Subjects.belongsToMany(models.Users_Subjects, {through: 'users_subjects', foreignKey: 'subject_id'})
            Subjects.belongsToMany(models.Evidence_Records, {through: 'evidence_records', foreignKey: 'subject_id'})
        }
    }

    Subjects.init({
        name: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Subjects',
        tableName: 'subjects',
    });
    return Subjects;
};