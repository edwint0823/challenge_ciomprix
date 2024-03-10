'use strict';

const evidenceRecordsDummy = require("./dummyData/evidence_records_dummy.json");
const subjectsDummy = require("./dummyData/subjects_dummy.json");
const usersDummy = require("./dummyData/users_dummy.json")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const subjectList = `'${subjectsDummy.map(s => s.name).join("', '")}'`

        const subjects = await queryInterface.sequelize.query(`
            SELECT "id", "name"
            from "subjects"
            where "name" in (${subjectList})
        `, {type: Sequelize.QueryTypes.SELECT})

        const user = await queryInterface.sequelize.query(`
            SELECT "id"
            from "users"
            where "email" = '${usersDummy[1].email}'
        `, {type: Sequelize.QueryTypes.SELECT})

        const subjectIdsMap = new Map();
        for (const subject of subjects) {
            subjectIdsMap.set(subject.name, subject.id);
        }

        const evidenceLinked = evidenceRecordsDummy.map((evidence, index) => {
            const subjectIndex = Math.floor(index / 5);
            const subjectName = subjects[subjectIndex].name;
            evidence.subject_id = subjectIdsMap.get(subjectName);
            evidence.user_id = user[0].id
            evidence.createdAt = new Date().toISOString()
            evidence.updatedAt = new Date().toISOString()
            return evidence
        })
        await queryInterface.bulkInsert('evidence_records', evidenceLinked, {})
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('evidence_records', null, {});
    }
};
