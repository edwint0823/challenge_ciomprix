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

module.exports = {
    CreateUserCheck,
    LoginUserCheck
}