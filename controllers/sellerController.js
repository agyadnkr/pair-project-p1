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


  static addCar(req, res) {
    // res.send(req.body)
    const { model, imageUrl, year, color, price, BrandId, cc, mileage, transmission, description } = req.body
    let value = { model, imageUrl, year, color, price, BrandId, cc, mileage, transmission, description }
    
      // res.send(value)
    Car.create(value)
    .then (data => {
      value = { cc, mileage, transmission, description, BrandId: data.id }
      return Detail.create(value)
    })
    .then(data => {
        res.redirect('/sell')
      })

    .catch(err => {
      res.send(err) // <== kasih alert nanti
    })

  }

  static editCarForm(req, res) {
    
  }

  static editCar(req, res) {
    
  }

  static deleteCar(req, res) {

  }

}

module.exports = sellerController;