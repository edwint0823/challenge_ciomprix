const {User_Subject, sequelize} = require('../../../../database/models')

const getSubjectsIdsByUserId = async (userId) => {
    return User_Subject.findAll({
        attributes: ['subject_id'],
        where: {user_id: userId},
        raw: true,
    });
}

const linkSubjectsToStudentByTransaction = async (subjectIds, studentId) => {

    return await sequelize.transaction(async (t) => {
        for (const subjectId of subjectIds) {
            await User_Subject.create({
                subject_id: subjectId,
                user_id: studentId
            }, t)
        }
    })
}
module.exports = {
    getSubjectsIdsByUserId,
    linkSubjectsToStudentByTransaction
}