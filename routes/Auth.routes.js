// import controller
const authController = require('../controllers/Auth.controller.js')

// router
const router = require('express').Router()

//use routers
router.post('/register', authController.register)


module.exports = router