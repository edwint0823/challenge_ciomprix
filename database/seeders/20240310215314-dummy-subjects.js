'use strict';

const subjectsDummy = require("./dummyData/subjects_dummy.json");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const subjectWithDate = subjectsDummy.map(subject => {
            subject.createdAt = new Date().toISOString()
            subject.updatedAt = new Date().toISOString()
            return subject
        })
        await queryInterface.bulkInsert('subjects', subjectWithDate, {})
    },

    async down(queryInterface, Sequelize) {
        for (const subject of subjectsDummy) {
            await queryInterface.bulkDelete('subjects', {name: subject.name}, {});
        }
    }
};
