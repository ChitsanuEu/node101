const router = require('express').Router()
const routerUser = require('./user.routes')
// const routerProduct = require('./product')

router.use('/users', routerUser)
// router.use('/products', routerUser)


module.exports = router