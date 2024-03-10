const {Evidence_Record, User} = require('../../../../database/models')
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
const getEvidenceList = async (whereOptions) => {
    return Evidence_Record.findAll({
        include: [
            {
                model: User,
                attributes: ['first_name', 'last_name'],
                where: {
                    ...whereOptions
                },
            }
        ],
    })
}
module.exports = {
    getEvidencesByUserIdAndSubjectId,
    create,
    getEvidenceList
}