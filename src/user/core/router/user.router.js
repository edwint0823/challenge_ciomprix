const router = require('express').Router();
const userController = require('../../adapters/api/user.controller')
const auth = require('../../../../middleware/auth.middleware')
const isAdmin = require('../../../../middleware/isAdmin.middleware')

router.post('/register', userController.createUser)
router.get('/login', userController.loginUser)
router.patch('/update/:userId', [auth, isAdmin], userController.updateUser)
router.delete('/delete/:userId', [auth, isAdmin], userController.deleteUser)
router.get('/student-list', [auth, isAdmin], userController.studentList)
router.get('/student-evidence-top', [auth, isAdmin], userController.studentTopEvidenceList)

module.exports = router