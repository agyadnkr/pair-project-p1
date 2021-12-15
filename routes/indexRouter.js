const express = require('express')
const indexRouter = express.Router()
const buyerRouter = require('./buyerRouter.js')
const sellerRouter = require('./sellerRouter.js')

indexRouter.get('/', (req, res) => {res.render('home')})
indexRouter.use('/buy', buyerRouter)
indexRouter.use('/sell', sellerRouter)

module.exports = indexRouter;