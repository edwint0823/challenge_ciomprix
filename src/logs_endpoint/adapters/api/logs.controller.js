const useCase = require("../../core/usecases/logs.usecase");
const lastTenMessages = (req, res, next) => {
    useCase.lastTenMessages().then((r) => {
        res.send(r)
    }).catch((err) => next(err))
}

module.exports = {
    lastTenMessages
}