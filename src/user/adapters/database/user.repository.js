const {User} = require('../../../../database/models')
const createUser = async (data) => {
    return User.create({...data})
}

module.exports = {
    createUser
}