const {User, sequelize} = require('../../../../database/models')
const createUser = async (data) => {
    return User.create({...data})
}

const findUserByEmail = async (email) => {
    return User.findOne({
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'dni', 'phone_number', 'birth_date']
            },
            where: {
                email: email
            },
            raw: true
        }
    )
}

const findUserById = async (id) => {
    return User.findOne({
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'dni', 'phone_number', 'birth_date']
        },
        where: {
            id: id
        },
        raw: true
    })
}

const updateUserById = async (id, userData) => {
    return User.update({...userData}, {where: {id: id}})
}

const deleteUser = async (id) => {
    return User.destroy({where: {id: id}})
}

const getStudentList = async () => {
    return User.findAll({
        attributes: {
            exclude: ['password']
        },
        where: {
            is_student: true,
        },
        order: [['last_name', 'DESC']]
    })
}

const getStudentTopEvidenceList = async () => {
    return User.findAll({
        attributes: [
            'id',
            'first_name',
            'last_name',
            [sequelize.literal('CAST((SELECT COUNT(*) FROM evidence_records WHERE evidence_records.user_id = "User"."id") AS INTEGER)'), 'evidence_count']
        ],
        where: {
            is_student: true,
        },
        order: [[sequelize.literal('evidence_count'), 'DESC']],
        limit: 5,
        raw: true
    })
}
module.exports = {
    createUser,
    findUserByEmail,
    findUserById,
    updateUserById,
    deleteUser,
    getStudentList,
    getStudentTopEvidenceList
}