const router = require('express').Router();
router.use('/users', require('../../src/user/core/router/user.router'))
module.exports = router