const express = require('express')
const buyerRouter = express.Router()
const Controller = require('../controllers/buyerController.js')

buyerRouter.get('/', (req, res) => {res.send('buyer home')})


module.exports = buyerRouter;