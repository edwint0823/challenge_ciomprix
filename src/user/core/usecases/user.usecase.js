const bcryptjs = require('bcryptjs')
const repository = require('../../adapters/database/user.repository')
const {HttpStatus, successMessages, errorMessages, tokenTImeExpiration} = require("../../../../core/constants");
const {throwError, generateJWT} = require("../../../../core/utils")
const createHttpError = require("http-errors");

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

const verifyUser = async (loginData) => {
    try {
        const user = await repository.findUserByEmail(loginData.email)
        if (user === null) {
            throw createHttpError(HttpStatus.BAD_REQUEST, errorMessages.invalidUser)
        }
        const validPassword = bcryptjs.compareSync(loginData.password, user.password)
        if (!validPassword) {
            throw createHttpError(HttpStatus.BAD_REQUEST, errorMessages.invalidUser)
        }
        const {password, ...userToEncrypt} = user
        const token = await generateJWT(userToEncrypt, tokenTImeExpiration)
        return {token}
    } catch (e) {
        throw throwError(e, e.statusCode || HttpStatus.INTERNAL_SERVER_ERROR, 'Error interno del servidor');
    }
}
const updateUser = async (userId, userData) => {
    try {
        const user = repository.findUserById(userId)
        if (user === null) {
            throw createHttpError(HttpStatus.NOT_FOUND, errorMessages.userNotFound)
        }
        if (userData.password) {
            const salt = bcryptjs.genSaltSync();
            userData.password = bcryptjs.hashSync(userData.password, salt);
        }
        await repository.updateUserById(userId, userData)
        return {
            message: successMessages.userUpdated, data: {
                is_admin: userData.is_admin,
                is_student: userData.is_student,
                birth_date: userData.birth_date,
                first_name: userData.first_name,
                last_name: userData.last_name,
                dni: userData.dni,
                phone_number: userData.phone_number,
            }
        }
    } catch (e) {
        throw throwError(e, e.statusCode || HttpStatus.INTERNAL_SERVER_ERROR, 'Error interno del servidor');
    }
}

const deleteUser = async (userId, loggedUser) => {
    try {
        if (userId === loggedUser.id) {
            throw createHttpError(HttpStatus.BAD_REQUEST, errorMessages.deleteHimSelf)
        }
        const user = repository.findUserById(userId)
        if (user === null) {
            throw createHttpError(HttpStatus.NOT_FOUND, errorMessages.userNotFound)
        }
        await repository.deleteUser(userId)
        return {message: successMessages.userDeleted}
    } catch (e) {
        throw throwError(e, e.statusCode || HttpStatus.INTERNAL_SERVER_ERROR, 'Error interno del servidor');
    }
}
module.exports = {
    createUser,
    verifyUser,
    updateUser,
    deleteUser
}