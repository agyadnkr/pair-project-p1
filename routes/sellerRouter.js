const express = require('express')
const sellerRouter = express.Router()
const Controller = require('../controllers/sellerController.js')

sellerRouter.get('/', (req, res) => {res.send('seller home')})


module.exports = sellerRouter;