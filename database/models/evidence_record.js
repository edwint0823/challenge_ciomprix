'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Evidence_Record extends Model {
        static associate(models) {
            Evidence_Record.belongsTo(models.User, {
                foreignKey: 'user_id'
            });
            Evidence_Record.belongsTo(models.Subject, {
                foreignKey: 'subject_id'
            });
        }
    }

    Evidence_Record.init({
        file_name: DataTypes.STRING,
        size: DataTypes.INTEGER,
        format: DataTypes.STRING(5),
        user_id: DataTypes.INTEGER,
        subject_id: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Evidence_Record',
        tableName: 'evidence_records',
    });
    return Evidence_Record;
};