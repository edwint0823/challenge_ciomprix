const router = require('express').Router();
const subjectController = require('../../adapters/api/subject.controller')
const auth = require('../../../../middleware/auth.middleware')
const isAdmin = require('../../../../middleware/isAdmin.middleware')
router.post('/link-student-to-subject', [auth, isAdmin], subjectController.linkStudent)
router.post('/create', [auth, isAdmin], subjectController.createSubject)
router.get('/list', auth, subjectController.subjectList)
module.exports = router