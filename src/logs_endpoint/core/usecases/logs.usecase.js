const logsRepository = require("../../adapters/database/logs.repository");
const {throwError} = require("../../../../core/utils");
const {HttpStatus} = require("../../../../core/constants");
const lastTenMessages = async () => {
    try {
        return await logsRepository.getLastTenMessages()
    } catch (e) {
        throw throwError(e, e.statusCode || HttpStatus.INTERNAL_SERVER_ERROR, 'Error interno del servidor');
    }
}

module.exports = {
    lastTenMessages
}