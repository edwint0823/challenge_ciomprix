const router = require('express').Router();
const evidenceController = require('../../adapters/api/evidence.controller')
const auth = require('../../../../middleware/auth.middleware')
const isStudent = require('../../../../middleware/isStudent.middleware')
const isAdmin = require('../../../../middleware/isAdmin.middleware')
const upload = require('../../../../core/uploadHandler')

router.post('/upload', [auth, isStudent, upload.single('file')], evidenceController.uploadEvidence)
router.get('/list', auth, evidenceController.evidenceList)
router.get('/list-ordered', [auth, isAdmin], evidenceController.evidenceListOrdered)

module.exports = router