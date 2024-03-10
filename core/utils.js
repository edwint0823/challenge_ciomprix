const path = require('path');
const fs = require("fs");
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

const verifyJWT = (token) => {
    return jwt.verify(token, process.env.SECRETKEY)
}

const deleteFile = (path) => {
    return fs.unlinkSync(path)
}
module.exports = {
    throwError,
    generateJWT,
    verifyJWT,
    deleteFile
};