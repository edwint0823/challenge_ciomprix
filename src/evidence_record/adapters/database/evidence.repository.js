const {Evidence_Record} = require('../../../../database/models')
const {Op} = require("sequelize");
const getEvidencesByUserIdAndSubjectId = async (userId, subjectId) => {
    return Evidence_Record.findAll({
        attributes: ['file_name'],
        where: {
            [Op.and]: [
                {user_id: userId},
                {subject_id: subjectId}
            ]
        },
        raw: true,
    })
}
const create = async (data) => {
    return Evidence_Record.create({...data})
}
module.exports = {
    getEvidencesByUserIdAndSubjectId,
    create
}