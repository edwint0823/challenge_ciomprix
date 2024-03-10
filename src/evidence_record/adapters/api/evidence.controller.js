const {evidenceUploadCheck} = require("./validators/evidence.validator");
const {validationResult, matchedData} = require("express-validator");
const {HttpStatus, errorMessages} = require("../../../../core/constants");
const {deleteFile} = require("../../../../core/utils");
const useCase = require("../../core/usecases/evidence.usecase");

const uploadEvidence = async (req, res, next) => {
    await Promise.all(evidenceUploadCheck.map(validation => validation.run(req)));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        if (req.file) {
            deleteFile(req.file.path)
        }
        return res.status(HttpStatus.BAD_REQUEST).json({
            message: errorMessages.validationErrors,
            errors: errors.array()
        });
    }
    const data = matchedData(req);
    useCase.uploadEvidence(Number(data.subject_id), req.file, req.user).then((r) => {
        res.send(r)
    }).catch((err) => next(err))
}
const evidenceList = (req, res, next) => {
    useCase.evidenceList(req.user).then((r) => {
        res.send(r)
    }).catch((err) => next(err))
}
module.exports = {
    uploadEvidence,
    evidenceList,
}