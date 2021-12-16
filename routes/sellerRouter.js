const express = require('express')
const sellerRouter = express.Router()
const Controller = require('../controllers/sellerController')

sellerRouter.get('/', Controller.carList)

sellerRouter.get('/add', Controller.addCarForm)
sellerRouter.post('/add', Controller.addCar)

module.exports = sellerRouter;