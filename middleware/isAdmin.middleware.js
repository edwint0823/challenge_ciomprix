const {HttpStatus, errorMessages} = require('../core/constants')

module.exports = (req, res, next) => {
    if (!req.user.is_admin) {
        return res.status(HttpStatus.UNAUTHORIZED).json({message: errorMessages.permissionDenied})
    }
    return next()
}