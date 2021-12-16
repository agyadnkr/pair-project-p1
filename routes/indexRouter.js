const express = require('express')
const indexRouter = express.Router()
const userRouter = require('./userRouter.js')
const sellerRouter = require('./sellerRouter.js')

indexRouter.get('/', (req, res) => {res.render('home')})


indexRouter.use('/user', userRouter)
indexRouter.use('/sell', sellerRouter)

module.exports = indexRouter;