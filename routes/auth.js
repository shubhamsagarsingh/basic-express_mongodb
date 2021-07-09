const express = require('express')
const { sayHi } = require('../controllers/auth')
const router = express.Router()



router.get('/', sayHi)



module.exports = router