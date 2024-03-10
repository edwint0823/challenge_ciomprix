const router = require('express').Router();
const evidenceController = require('../../adapters/api/evidence.controller')
const auth = require('../../../../middleware/auth.middleware')
const isStudent = require('../../../../middleware/isStudent.middleware')
const upload = require('../../../../core/uploadHandler')

router.post('/upload', [auth, isStudent, upload.single('file')], evidenceController.uploadEvidence)
router.get('/list', auth, evidenceController.evidenceList)
module.exports = router