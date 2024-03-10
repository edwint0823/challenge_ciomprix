const {HttpStatus, errorMessages} = require('../core/constants')
const {verifyJWT} = require('../core/utils')
module.exports = (req, res, next) => {
    const authorization = req.headers.authorization
    if (!authorization) {
        return res.status(HttpStatus.UNAUTHORIZED).json({message: errorMessages.tokenRequired})
    }
    const token = authorization.split(' ')[1]
    const user = verifyJWT(token)
    if (!user) {
        return res.status(HttpStatus.UNAUTHORIZED).json({message: errorMessages.tokenRequired})
    }
    req.user = user
    return next()
}