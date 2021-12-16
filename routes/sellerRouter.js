const express = require('express')
const sellerRouter = express.Router()
const Controller = require('../controllers/sellerController')

sellerRouter.get('/', Controller.carList)

sellerRouter.get('/add', Controller.addCarForm)
sellerRouter.post('/add', Controller.addCar)

sellerRouter.get('/:carId/detail', Controller.carDetail)

sellerRouter.get('/:carId/edit', Controller.editCarForm)
sellerRouter.post('/:carId/edit', Controller.editCar)

sellerRouter.get('/:carId/delete', Controller.deleteCar)



module.exports = sellerRouter;