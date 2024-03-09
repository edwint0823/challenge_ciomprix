'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('users_subjects', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                }
            },
            subject_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'subjects',
                    key: 'id'
                }
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('users_subjects');
    }
};