const {body} = require("express-validator");
const {validationMessages} = require("../../../../../core/constants");
const linkStudentCheck = [
    body('student_id').not().isEmpty().withMessage(validationMessages.linkStudent.studentIdRequired).trim().escape().isNumeric().withMessage(validationMessages.linkStudent.studentIdValid),
    body('subjects_id').exists().withMessage(validationMessages.linkStudent.subjectIdRequired).isArray().withMessage(validationMessages.linkStudent.subjectIdIsArray).custom(value => {
        if (!value.every(num => typeof num === 'number')) {
            throw new Error(validationMessages.linkStudent.subjectIdOnlyNumbers);
        }
        if (value.length < 1) {
            throw new Error(validationMessages.linkStudent.subjectIdMinLength);
        }
        if (value.length > 5) {
            throw new Error(validationMessages.linkStudent.subjectIdMaxLength);
        }
        return true;
    }),
]

const subjectCreateCheck = [
    body('name').not().isEmpty().withMessage(validationMessages.createSubject.nameRequired).trim().escape().isLength({min: 2}).withMessage(validationMessages.createSubject.nameLength)
]

module.exports = {
    linkStudentCheck,
    subjectCreateCheck
}
