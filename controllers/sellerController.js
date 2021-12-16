const { Car, Detail, User, Brand } = require('../models')

class sellerController {

  static carList(req, res) {
    Car.findAll({
      include: [Detail, Brand]
    })
      .then(data => {
        res.render('sellerCarList', {data})
      })
      .catch(err => {
        res.send(err)
      })
  }

  static addCarForm(req, res) {
    Brand.findAll()
      .then(data => {
        res.render('addCarForm', {data})
      })
      .catch(err => {
        res.send(err)
      })
  }

  static carDetail(req, res) {
    Car.findByPk(req.params.carId, {
      include: [Detail, User, Brand]
    })
    .then(data => {
      res.render('carDetail', {data})
    })
    .catch(err => {
      res.send(err)
    })
  }


  static addCar(req, res) {
    const { model, imageUrl, year, color, price, BrandId, cc, mileage, transmission, description } = req.body
    let value = { model, imageUrl, year, color, price, BrandId, cc, mileage, transmission, description }
    
    Car.create(value)
    .then (data => {
      value = { cc, mileage, transmission, description, CarId: data.id }
      return Detail.create(value)
    })
    .then(data => {
        res.redirect('/sell')
      })

    .catch(err => {
      res.send(err.errors.map(e => e.message)) // <== kasih alert nanti
    })

  }

  static editCarForm(req, res) {
    let carData;

    Car.findByPk(req.params.carId, {
      include: [Detail, User]
    })
      .then(data =>{
        carData = data
        return Brand.findAll()
      })
      .then(brandData => {
        res.render('editCarForm', {brandData, carData})
      })
 
  }

  static editCar(req, res) {
    const { model, imageUrl, year, color, price, BrandId, cc, mileage, transmission, description } = req.body

    let value = { model, imageUrl, year, color, price, BrandId, cc, mileage, transmission, description, updatedAt: new Date() }

    Car.update(value, {
      where: {
        id: req.params.carId
      }
    })
    .then (data => {
      value = { cc, mileage, transmission, description,updatedAt: new Date(),  CarId: data.id }
      return Detail.update(value, {
        where: {
          id: req.params.carId
        }
      })
    })
    .then(data => {
        res.redirect('/sell')
      })

    .catch(err => {
      res.send(err.errors.map(e => e.message)) // <== kasih alert nanti
    })
  }

  static deleteCar(req, res) {

  }

}

module.exports = sellerController;