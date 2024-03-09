const router = require('express').Router();
const userController = require('../../adapters/api/user.controller')
router.post('/register', userController.createUser)
router.get('/login', userController.loginUser)
module.exports = router