const bcryptjs = require('bcryptjs')
const repository = require('../../adapters/database/user.repository')
const {HttpStatus, successMessages} = require("../../../../core/constants");
const {throwError} = require("../../../../core/utils")
const createUser = async (userData) => {
    try {
        const salt = bcryptjs.genSaltSync();
        userData.password = bcryptjs.hashSync(userData.password, salt);
        const user = await repository.createUser(userData)
        return {
            message: successMessages.userCreated,
            data: {
                is_admin: user.is_admin,
                is_student: user.is_student,
                birth_date: user.birth_date,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                dni: user.dni,
                phone_number: user.phone_number,
            }
        }
    } catch (e) {
        throw throwError(e, HttpStatus.INTERNAL_SERVER_ERROR, 'Error interno del servidor');
    }

}
module.exports = {
    createUser
}