const path = require('path');
const createError = require("http-errors");

const throwError = (err, statusCode, message) => {
    let messageReturn = message
    if (err.name === 'SequelizeUniqueConstraintError') {
        messageReturn = err.original.message
    }
    return createError(statusCode, messageReturn);
};

const customLogger = (req, res, next) => {
    const logDirectory = path.join(__dirname, '../', 'log');
    const logEntry = `${req.ip} | ${req.method} ${req.originalUrl} | ${res.statusCode} | ${req.user || '-'} | ${new Date().toISOString()}`;
    fs.appendFile(path.join(logDirectory, 'access.log'), logEntry + '\n', (err) => {
        if (err) {
            console.error('Error al escribir en el archivo de registro:', err);
        }
    });
    next();
}
module.exports = {
    throwError,
    customLogger
};