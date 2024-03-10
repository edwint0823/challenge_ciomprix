const userRepository = require("../../../user/adapters/database/user.repository");
const userSubjectRepository = require("../../../user_subject/adapters/database/user_subject.repository")
const subjectRepository = require('../../adapters/database/subject.repository')
const {successMessages, HttpStatus, errorMessages} = require("../../../../core/constants");
const {throwError} = require("../../../../core/utils");
const createHttpError = require("http-errors");
const linkStudent = async (data) => {
    try {
        const student = await userRepository.findUserById(data.student_id)
        if (student === null) {
            throw createHttpError(HttpStatus.BAD_REQUEST, errorMessages.studentNotFound)
        }
        if (!student.is_student) {
            throw createHttpError(HttpStatus.BAD_REQUEST, errorMessages.isNotStudent)
        }

        const subjects = await subjectRepository.getSubjectsByIds(data.subjects_id)

        if (subjects.length !== data.subjects_id.length) {
            throw createHttpError(HttpStatus.BAD_REQUEST, errorMessages.subjectsNotFound)
        }
        const studentSubject = await userSubjectRepository.getSubjectsIdsByUserId(student.id)

        if (studentSubject.length >= 5 || (studentSubject.length + data.subjects_id.length) > 5) {
            throw createHttpError(HttpStatus.BAD_REQUEST, errorMessages.studentMaxSubjectsLinked)
        }
        const studentHasAlreadySubject = data.subjects_id.some(s => studentSubject.includes(s))

        if (studentHasAlreadySubject) {
            throw createHttpError(HttpStatus.BAD_REQUEST, errorMessages.studentAlreadyLinked)
        }
        await userSubjectRepository.linkSubjectsToStudentByTransaction(data.subjects_id, data.student_id)
        return {message: successMessages.studentLinked}
    } catch (e) {
        throw throwError(e, e.statusCode || HttpStatus.INTERNAL_SERVER_ERROR, 'Error interno del servidor');
    }
}

const createSubject = async (data) => {
    try {
        const subject = await subjectRepository.createSubject(data.name)
        return {
            message: successMessages.subjectCreated,
            data: {
                id: subject.id,
                name: subject.name
            }
        }
    } catch (e) {
        throw throwError(e, e.statusCode || HttpStatus.INTERNAL_SERVER_ERROR, 'Error interno del servidor');
    }
}

const subjectList = async (loggedUser) => {
    try {
        let whereOptions = {
            id: loggedUser.id
        }
        if (loggedUser.is_admin) {
            whereOptions = {}
        }
        return subjectRepository.getSubjectList(whereOptions)
    } catch (e) {
        throw throwError(e, e.statusCode || HttpStatus.INTERNAL_SERVER_ERROR, 'Error interno del servidor');
    }
}
module.exports = {
    linkStudent,
    createSubject,
    subjectList
}