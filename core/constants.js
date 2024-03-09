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

}
const errorMessages = {
    validationErrors: 'errores de validación',
    invalidUser: 'Correo electrónico o contraseña incorrecta por favor validar'
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
    }
}
const tokenTImeExpiration = '5m'
module.exports = {
    HttpStatus,
    successMessages,
    validationMessages,
    errorMessages,
    tokenTImeExpiration
}