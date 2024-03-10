const HttpStatus = {
    CONTINUE: 100,
    SWITCHING_PROTOCOLS: 101,
    PROCESSING: 102,
    EARLYHINTS: 103,
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTHORITATIVE_INFORMATION: 203,
    NO_CONTENT: 204,
    RESET_CONTENT: 205,
    PARTIAL_CONTENT: 206,
    AMBIGUOUS: 300,
    MOVED_PERMANENTLY: 301,
    FOUND: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,
    TEMPORARY_REDIRECT: 307,
    PERMANENT_REDIRECT: 308,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    GONE: 410,
    LENGTH_REQUIRED: 411,
    PRECONDITION_FAILED: 412,
    PAYLOAD_TOO_LARGE: 413,
    URI_TOO_LONG: 414,
    UNSUPPORTED_MEDIA_TYPE: 415,
    REQUESTED_RANGE_NOT_SATISFIABLE: 416,
    EXPECTATION_FAILED: 417,
    I_AM_A_TEAPOT: 418,
    MISDIRECTED: 421,
    UNPROCESSABLE_ENTITY: 422,
    FAILED_DEPENDENCY: 424,
    PRECONDITION_REQUIRED: 428,
    TOO_MANY_REQUESTS: 429,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    HTTP_VERSION_NOT_SUPPORTED: 505
}
const successMessages = {
    userCreated: 'Usuario creado exitosamente',
    studentLinked: 'El estudiante ha sido registrado en la(s) asignatura(s) proporcionadas',
    subjectCreated: 'La asignatura se creado correctamente',
    evidenceUploaded: 'Se registro la evidencia de la asignatura exitosamente'
}
const errorMessages = {
    validationErrors: 'errores de validación',
    invalidUser: 'Correo electrónico o contraseña incorrecta por favor validar',
    permissionDenied: 'No tiene permisos para realizar esta acción',
    tokenRequired: 'Token requerido',
    studentNotFound: 'El estudiante no se ha encontrado',
    isNotStudent: 'El usuario no es un estudiante',
    studentMaxSubjectsLinked: 'El estudiante supera el limite máximo de asignaturas ',
    studentAlreadyLinked: 'El estudiante ya ha sido matriculado en algunas de las asignaturas proporcionadas',
    subjectsNotFound: 'Alguna(s) asignaturas no existen',
    fileTypeNotAllowed: 'Tipo de archivo no admitido',
    subjectNotFoundOrStudentNotLinked: 'La asignatura proporciona no existe o el estudiante no esta matriculado en dicha asignatura',
    maxEvidencesUploaded: 'El estudiante ya ha subido el máximo de evidencias para la asignatura proporcionada'
}
const validationMessages = {
    userCreate: {
        firstNameMinLength: 'El nombre debe tener al menos 2 caracteres',
        firstNameRequired: 'El nombre es requerido',
        lastNameMinLength: 'El apellido debe tener al menos 2 caracteres',
        lastNameRequired: 'El apellido es requerido',
        emailValid: 'El correo electrónico no es válido',
        emailRequired: 'El correo electrónico es requerido',
        passwordLength: 'La contraseña debe tener al menos 6 caracteres',
        passwordRequired: 'La contraseña es requerida',
        dniNumber: 'El DNI debe ser numérico',
        dniRequired: 'El DNI es requerido',
        phoneNumberValid: 'El número de teléfono no es válido',
        phoneNumberRequired: 'El número de teléfono es requerido',
        birthDateValid: 'La fecha de nacimiento no es válida',
        birthDateRequired: 'La fecha de nacimiento es requerida',
        isAdminValid: 'is_admin debe ser un booleano',
        isAdminRequired: 'is_admin es requerido',
        isStudentValid: 'is_student debe ser un booleano',
        isStudentRequired: 'is_student es requerido'
    },
    loginUser: {
        emailValid: 'El correo electrónico no es válido',
        emailRequired: 'El correo electrónico es requerido',
        passwordLength: 'La contraseña debe tener al menos 6 caracteres',
        passwordRequired: 'La contraseña es requerida',
    },
    linkStudent: {
        studentIdRequired: 'El id del estudiante es requerido',
        studentIdValid: 'El id del estudiante no es valido',
        subjectIdRequired: 'El(los) id(s) de la(s) asignatura(s) es requerida',
        subjectIdIsArray: 'El(los) id(s) de la(s) asignatura(s) debe ser un array',
        subjectIdOnlyNumbers: 'El listado de asignaturas debe contener solo números',
        subjectIdMinLength: 'El listado de asignaturas debe contener al menos un número',
        subjectIdMaxLength: 'El listado de asignaturas debe contener 5 asignatura como máximo',
    },
    createSubject: {
        nameRequired: 'El nombre de la asignatura es requerido',
        nameLength: 'El nombre de la asignatura debe tener al menos 2 caracteres'
    },
    evidenceUpload: {
        subjectIdRequired: 'El id de la asignatura es requerido',
        subjectIdValid: 'El id de la asignatura no es valido',
        fileRequired: 'El archivo de evidencia es requerido',
        fileFormat: 'El archivo de evidencia debe ser de tipo .png, .jpg o .pdf'
    }
}
const tokenTImeExpiration = '5m'
const validEvidenceFileFormat = ['image/png', 'image/jpeg', 'application/pdf']
module.exports = {
    HttpStatus,
    successMessages,
    validationMessages,
    errorMessages,
    tokenTImeExpiration,
    validEvidenceFileFormat
}