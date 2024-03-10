const {Evidence_Record, User, sequelize} = require('../../../../database/models')
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

const getEvidenceListOrdered = async () => {
    return Evidence_Record.findAll({
        include: [
            {
                model: User,
                attributes: ['first_name', 'last_name', 'email']
            }
        ],
        order: [[User, 'email', 'ASC'], ['createdAt', 'ASC']]
    })
}
const percentEvidenceByFormat = async () => {
    return await sequelize.query(`
        SELECT format,
               COUNT(*)                                                           AS total,
               ROUND(COUNT(*) * 100 / (SELECT COUNT(*) FROM evidence_records), 2) AS percent
        FROM evidence_records
        GROUP BY format;
    `, {type: sequelize.QueryTypes.SELECT});
}
module.exports = {
    getEvidencesByUserIdAndSubjectId,
    create,
    getEvidenceList,
    getEvidenceListOrdered,
    percentEvidenceByFormat
}