'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Subject extends Model {
        static associate(models) {
            Subject.belongsToMany(models.User, {
                through: models.User_Subject,
                foreignKey: 'subject_id'
            });
            Subject.belongsToMany(models.Evidence_Record, {through: 'evidence_records', foreignKey: 'subject_id'})
        }
    }

    Subject.init({
        name: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Subject',
        tableName: 'subjects',
    });
    return Subject;
};