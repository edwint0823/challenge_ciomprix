const {validationResult, matchedData} = require("express-validator");
const useCase = require('../../core/usecases/user.usecase')
const {CreateUserCheck, LoginUserCheck, updateUserCheck} = require('./validators/user.validator')
const {errorMessages, HttpStatus} = require('../../../../core/constants')
const createUser = async (req, res, next) => {
    await Promise.all(CreateUserCheck.map(validation => validation.run(req)));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(HttpStatus.BAD_REQUEST).json({
            message: errorMessages.validationErrors,
            errors: errors.array()
        });
    }
    const data = matchedData(req);
    useCase.createUser(data).then((r) => {
        res.send(r)
    }).catch((err) => next(err))
}

const loginUser = async (req, res, next) => {
    await Promise.all(LoginUserCheck.map(validation => validation.run(req)));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(HttpStatus.BAD_REQUEST).json({
            message: errorMessages.validationErrors,
            errors: errors.array()
        });
    }
    const data = matchedData(req);
    useCase.verifyUser(data).then((r) => {
        res.send(r)
    }).catch((err) => next(err))
}

const updateUser = async (req, res, next) => {
    await Promise.all(updateUserCheck.map(validation => validation.run(req)));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(HttpStatus.BAD_REQUEST).json({
            message: errorMessages.validationErrors,
            errors: errors.array()
        });
    }
    const data = matchedData(req);
    useCase.updateUser(req.params.userId, data).then((r) => {
        res.send(r)
    }).catch((err) => next(err))
}

const deleteUser = async (req, res, next) => {
    useCase.deleteUser(req.params.userId, req.user).then((r) => {
        res.send(r)
    }).catch((err) => next(err))
}


module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser
}