const {HttpStatus, errorMessages} = require('../core/constants')

module.exports = (req, res, next) => {
    if (!req.user.is_student) {
        return res.status(HttpStatus.UNAUTHORIZED).json({message: errorMessages.permissionDenied})
    }
    return next()
}