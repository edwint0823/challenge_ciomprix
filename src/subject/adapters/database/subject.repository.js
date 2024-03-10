const {Op} = require("sequelize");
const {Subject, User, Evidence_Record} = require('../../../../database/models')
const getSubjectsByIds = async (ids) => {
    return Subject.findAll({
        attributes: ['name'],
        where: {
            id: {
                [Op.in]: ids,
            }
        },
        raw: true
    })
}

const createSubject = async (name) => {
    return Subject.create({name: name})
}

const getSubjectList = async (whereOptions) => {
    return Subject.findAll({
        attributes: ['id', 'name'],
        include: [
            {
                model: User,
                attributes: ['first_name', 'last_name'],
                through: {
                    attributes: []
                },
                where: {
                    ...whereOptions
                },
            }
        ],
        order: [['name', 'ASC']]
    })
}
const getSubjectEvidenceList = async () => {
    return Subject.findAll({
        include: [
            {
                model: Evidence_Record,
            }
        ]
    })
}
module.exports = {
    getSubjectsByIds,
    createSubject,
    getSubjectList,
    getSubjectEvidenceList
}