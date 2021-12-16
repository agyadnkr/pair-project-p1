const express = require('express')
const buyerRouter = express.Router()
const Controller = require('../controllers/buyerController.js')

buyerRouter.get('/', Controller.buyerCarList)


module.exports = buyerRouter;