'use strict';

const usersDummy = require("./dummyData/users_dummy.json");
const subjectsDummy = require("./dummyData/subjects_dummy.json");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const firsFourSubjects = subjectsDummy.slice(0, 4)
        const subjectList = `'${firsFourSubjects.map(s => s.name).join("', '")}'`
        const subjects = await queryInterface.sequelize.query(`
            SELECT "id", "name"
            from "subjects"
            where "name" in (${subjectList})
        `, {type: Sequelize.QueryTypes.SELECT})
        console.log('subjects', subjects)
        const user = await queryInterface.sequelize.query(`
            SELECT "id"
            from "users"
            where "email" = '${usersDummy[1].email}'
        `, {type: Sequelize.QueryTypes.SELECT})
        console.log('user', user)
        const subjectIdsMap = new Map();
        for (const subject of subjects) {
            subjectIdsMap.set(subject.name, subject.id);
        }
        console.log('subjectIdsMap', subjectIdsMap)

        const userSubjectsArray = []
        for (let i = 0; i < firsFourSubjects.length; i++) {
            const subjectName = subjects[i].name;
            console.log(subjectName, subjectIdsMap.get(subjectName))
            userSubjectsArray.push({
                user_id: user[0].id,
                subject_id: subjectIdsMap.get(subjectName)
            })
        }
        await queryInterface.bulkInsert('users_subjects', userSubjectsArray, {})
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('users_subjects', null, {});
    }
};
