const express = require('express')
const indexRouter = express.Router()
const userRouter = require('./userRouter.js')
const sellerRouter = require('./sellerRouter.js')

indexRouter.get('/', (req, res) => {res.render('home')})


indexRouter.use('/user', userRouter)
indexRouter.use('/sell', sellerRouter)

// Login page
indexRouter.get('/login', (req, res) => res.send('login'))

// Register page
indexRouter.get('/login', (req, res) => res.send('login'))

module.exports = indexRouter;