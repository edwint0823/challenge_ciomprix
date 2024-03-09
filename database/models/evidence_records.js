'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Evidence_Records extends Model {
        static associate(models) {
        }
    }

    Evidence_Records.init({
        file_name: DataTypes.STRING,
        size: DataTypes.INTEGER,
        format: DataTypes.STRING(5),
        user_id: DataTypes.INTEGER,
        subject_id: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Evidence_Records',
        tableName: 'evidence_records',
    });
    return Evidence_Records;
};