const express = require('express')
const userRouter = express.Router()
const Controller = require('../controllers/userController.js')

userRouter.get('/', Controller.buyerCarList)


module.exports = userRouter;