const express = require('express')
const sellerRouter = express.Router()
const Controller = require('../controllers/sellerController')

sellerRouter.get('/', Controller.carList)

sellerRouter.get('/add', Controller.addCarForm)
sellerRouter.post('/add', Controller.addCar)

sellerRouter.get('/:carId/detail', Controller.carDetail)

sellerRouter.get('/:carId/edit', Controller.editCarForm)
sellerRouter.post('/:carId/edit', (req, res) => {res.send('edit car')})

sellerRouter.get('/:carId/delete', (req, res) => {res.send('delete car')})



module.exports = sellerRouter;