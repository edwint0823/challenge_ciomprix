const router = require('express').Router();
router.use('/users', require('../../src/user/core/router/user.router'))
router.use('/subjects', require('../../src/subject/core/router/subject.router'))
router.use('/evidences', require('../../src/evidence_record/core/router/evidence.router'))
module.exports = router