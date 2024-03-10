const {body} = require('express-validator')
const {validationMessages} = require('../../../../../core/constants')
const CreateUserCheck = [
    body('first_name').not().isEmpty().withMessage(validationMessages.userCreate.firstNameRequired).trim().escape().isLength({min: 2}).withMessage(validationMessages.userCreate.firstNameMinLength),
    body('last_name').not().isEmpty().withMessage(validationMessages.userCreate.lastNameRequired).trim().escape().isLength({min: 2}).withMessage(validationMessages.userCreate.lastNameMinLength),
    body('email').not().isEmpty().withMessage(validationMessages.userCreate.emailRequired).trim().escape().isEmail().withMessage(validationMessages.userCreate.emailValid),
    body('password').not().isEmpty().withMessage(validationMessages.userCreate.passwordRequired).trim().escape().isLength({min: 6}).withMessage(validationMessages.userCreate.passwordLength),
    body('dni').not().isEmpty().withMessage(validationMessages.userCreate.dniRequired).trim().escape().isNumeric().withMessage(validationMessages.userCreate.dniNumber),
    body('phone_number').not().isEmpty().withMessage(validationMessages.userCreate.phoneNumberRequired).trim().escape().isMobilePhone('es-CO').withMessage(validationMessages.userCreate.phoneNumberValid),
    body('birth_date').not().isEmpty().withMessage(validationMessages.userCreate.birthDateRequired).isISO8601().toDate().withMessage(validationMessages.userCreate.birthDateValid),
    body('is_admin').not().isEmpty().withMessage(validationMessages.userCreate.isAdminRequired).isBoolean().withMessage(validationMessages.userCreate.isAdminValid),
    body('is_student').not().isEmpty().withMessage(validationMessages.userCreate.isStudentRequired).isBoolean().withMessage(validationMessages.userCreate.isStudentValid),
]

const LoginUserCheck = [
    body('email').not().isEmpty().withMessage(validationMessages.loginUser.emailRequired).trim().escape().isEmail().withMessage(validationMessages.loginUser.emailValid),
    body('password').not().isEmpty().withMessage(validationMessages.loginUser.passwordRequired).trim().escape().isLength({min: 6}).withMessage(validationMessages.loginUser.passwordLength),
]
const updateUserCheck = [
    body('first_name').not().isEmpty().withMessage(validationMessages.userUpdate.firstNameRequired).trim().escape().isLength({min: 2}).withMessage(validationMessages.userUpdate.firstNameMinLength),
    body('last_name').optional().not().isEmpty().withMessage(validationMessages.userUpdate.lastNameRequired).trim().escape().isLength({min: 2}).withMessage(validationMessages.userUpdate.lastNameMinLength),
    body('password').optional().not().isEmpty().withMessage(validationMessages.userUpdate.passwordRequired).trim().escape().isLength({min: 6}).withMessage(validationMessages.userUpdate.passwordLength),
    body('dni').optional().not().isEmpty().withMessage(validationMessages.userUpdate.dniRequired).trim().escape().isNumeric().withMessage(validationMessages.userUpdate.dniNumber),
    body('phone_number').optional().not().isEmpty().withMessage(validationMessages.userUpdate.phoneNumberRequired).trim().escape().isMobilePhone('es-CO').withMessage(validationMessages.userUpdate.phoneNumberValid),
    body('birth_date').optional().not().isEmpty().withMessage(validationMessages.userUpdate.birthDateRequired).isISO8601().toDate().withMessage(validationMessages.userUpdate.birthDateValid),
    body('is_admin').optional().not().isEmpty().withMessage(validationMessages.userUpdate.isAdminRequired).isBoolean().withMessage(validationMessages.userUpdate.isAdminValid),
    body('is_student').optional().not().isEmpty().withMessage(validationMessages.userUpdate.isStudentRequired).isBoolean().withMessage(validationMessages.userUpdate.isStudentValid),
]
module.exports = {
    CreateUserCheck,
    LoginUserCheck,
    updateUserCheck
}