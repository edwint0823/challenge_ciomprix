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

module.exports = {
    createUser,
    findUserByEmail
}