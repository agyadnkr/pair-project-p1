const express = require('express')
const userRouter = express.Router()
const Controller = require('../controllers/userController.js')

userRouter.get('/', Controller.buyerCarList)

userRouter.get('/:carId/buy', Controller.buyCar)


module.exports = userRouter;