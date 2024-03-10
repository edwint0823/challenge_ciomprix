const {Op} = require("sequelize");
const {Subject} = require('../../../../database/models')
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

module.exports = {
    getSubjectsByIds,
    createSubject
}