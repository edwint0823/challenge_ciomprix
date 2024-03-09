const path = require('path');
const createError = require("http-errors");
const jwt = require("jsonwebtoken");
const dotEnvPath = path.resolve('.env')
require('dotenv').config({path: dotEnvPath})


const throwError = (err, statusCode, message) => {
    let messageReturn = message
    if (err.name === 'SequelizeUniqueConstraintError') {
        messageReturn = err.original.message
    } else if (err.message) {
        messageReturn = err.message
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

const generateJWT = (payload, expired) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, process.env.SECRETKEY, {
            expiresIn: expired
        }, (err, token) => {
            if (err) {
                console.log(err)
                reject('No se pudo generar el token')
            } else {
                resolve(token)
            }
        })
    })
}
module.exports = {
    throwError,
    customLogger,
    generateJWT
};