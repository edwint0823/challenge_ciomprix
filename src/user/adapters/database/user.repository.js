const {User} = require('../../../../database/models')
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

module.exports = {
    createUser,
    findUserByEmail,
    findUserById,
    updateUserById,
    deleteUser
}