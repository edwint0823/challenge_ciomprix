'use strict';
const bcryptjs = require("bcryptjs");
const usersDummy = require('./dummyData/users_dummy.json')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const userWithEncryptedPassword = usersDummy.map(user => {
            const salt = bcryptjs.genSaltSync();
            user.password = bcryptjs.hashSync(user.password, salt);
            user.createdAt = new Date().toISOString()
            user.updatedAt = new Date().toISOString()
            return user
        })
        await queryInterface.bulkInsert('users', userWithEncryptedPassword, {})
    },

    async down(queryInterface, Sequelize) {
        for (const user of usersDummy) {
            await queryInterface.bulkDelete('users', {email: user.email}, {});
        }
    }
};
