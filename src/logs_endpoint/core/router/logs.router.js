const router = require('express').Router();
const logsController = require('../../adapters/api/logs.controller')
const auth = require('../../../../middleware/auth.middleware')
const isAdmin = require('../../../../middleware/isAdmin.middleware')

router.get('/last-ten-messages', [auth, isAdmin], logsController.lastTenMessages)

module.exports = router