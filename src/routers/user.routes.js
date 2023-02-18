const router = require('express').Router()
const userController = require('./../controller/user.controller')

router.get('/', userController.getUser)
// should eg just get

router.delete('/:id', userController.deleteUser)

module.exports = router