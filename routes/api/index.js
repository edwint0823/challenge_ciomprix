const router = require('express').Router();
router.use('/users', require('../../src/user/core/router/user.router'))
router.use('/subjects', require('../../src/subject/core/router/subject.router'))
module.exports = router