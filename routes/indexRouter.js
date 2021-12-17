const express = require('express')
const indexRouter = express.Router()
const userRouter = require('./userRouter.js')
const sellerRouter = require('./sellerRouter.js')
const loginController = require('../controllers/loginController')
const { ensureAuthenticated } = require('../helpers/authentification');

indexRouter.get('/', (req, res) => {res.render('home')})


indexRouter.use('/user', userRouter)
indexRouter.use('/sell', ensureAuthenticated, sellerRouter)

// Login page
indexRouter.get('/login', loginController.loginForm)
indexRouter.post('/login', loginController.loginSubmit);

// Register page
indexRouter.get('/register', loginController.registerForm)
indexRouter.post('/register', loginController.registerSubmit)

//Logout
indexRouter.get('/logout', loginController.logout);

module.exports = indexRouter;