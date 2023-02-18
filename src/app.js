const express = require('express')
const app = express()
const PORT = 3000

const router = require('./routers')


app.use('/api', router)


module.exports = app