const {body} = require("express-validator");
const {validationMessages} = require("../../../../../core/constants");
const evidenceUploadCheck = [
    body('subject_id').not().isEmpty().withMessage(validationMessages.evidenceUpload.subjectIdRequired).trim().escape().isNumeric().withMessage(validationMessages.evidenceUpload.subjectIdValid),
    body('file').custom((value, {req}) => {
        if (!req.file) {
            throw new Error(validationMessages.evidenceUpload.fileRequired);
        }
        return true;
    })
]

module.exports = {
    evidenceUploadCheck
}