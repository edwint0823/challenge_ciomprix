const {linkStudentCheck, subjectCreateCheck} = require("./validators/subject.validator");
const {validationResult, matchedData} = require("express-validator");
const {HttpStatus, errorMessages} = require("../../../../core/constants");
const useCase = require("../../core/usecases/subject.usecase");
const linkStudent = async (req, res, next) => {
    await Promise.all(linkStudentCheck.map(validation => validation.run(req)));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(HttpStatus.BAD_REQUEST).json({
            message: errorMessages.validationErrors,
            errors: errors.array()
        });
    }
    const data = matchedData(req);
    useCase.linkStudent(data).then((r) => {
        res.send(r)
    }).catch((err) => next(err))
}

const createSubject = async (req, res, next) => {
    await Promise.all(subjectCreateCheck.map(validation => validation.run(req)));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(HttpStatus.BAD_REQUEST).json({
            message: errorMessages.validationErrors,
            errors: errors.array()
        });
    }
    const data = matchedData(req);
    useCase.createSubject(data).then((r) => {
        res.send(r)
    }).catch((err) => next(err))
}

const subjectList = async (req, res, next) => {
    useCase.subjectList(req.user).then((r) => {
        res.send(r)
    }).catch((err) => next(err))
}
module.exports = {
    linkStudent,
    createSubject,
    subjectList
}