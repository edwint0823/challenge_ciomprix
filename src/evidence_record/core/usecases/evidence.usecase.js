const {throwError} = require("../../../../core/utils");
const createHttpError = require("http-errors");
const {HttpStatus, successMessages, errorMessages} = require("../../../../core/constants");
const userSubjectRepository = require("../../../user_subject/adapters/database/user_subject.repository")
const evidenceRecordRepository = require("../../adapters/database/evidence.repository")
const uploadEvidence = async (subject_id, file, user) => {
    try {
        const studentSubjects = await userSubjectRepository.getSubjectsIdsByUserId(user.id)
        if (!studentSubjects.some(s => s.subject_id === subject_id)) {
            throw createHttpError(HttpStatus.BAD_REQUEST, errorMessages.subjectNotFoundOrStudentNotLinked)
        }
        const evidences = evidenceRecordRepository.getEvidencesByUserIdAndSubjectId(user.id, subject_id)
        if (evidences.length >= 5) {
            throw createHttpError(HttpStatus.BAD_REQUEST, errorMessages.maxEvidencesUploaded)
        }
        const payload = {
            file_name: file.filename.split('.').shift(),
            size: file.size,
            format: `.${file.filename.split('.').pop()}`,
            user_id: user.id,
            subject_id: subject_id
        }
        await evidenceRecordRepository.create(payload)
        return {message: successMessages.evidenceUploaded, data: payload}
    } catch (e) {
        throw throwError(e, e.statusCode || HttpStatus.INTERNAL_SERVER_ERROR, 'Error interno del servidor');
    }
}

module.exports = {
    uploadEvidence
}