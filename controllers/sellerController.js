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

    const {model, imageUrl, year, color, price, cc, mileage, transmission, description, BrandId} = req.body

    let valueCar = {model, imageUrl, year, color, price, BrandId}

    Car.create(valueCar)
      .then(data => {
        let valueDetail = {cc, mileage, transmission, description, CarId : data.instance.dataValue.id}
        // res.send(data)
        Detail.create(valueDetail)   
      })
      .then(data => {
        res.redirect('/sell')
      })
      .catch(err => {
        res.send(err) // <== kasih alert nanti
      })

  }

  static editCarForm(req, res) {
    Car.findByPk()
  }

  static editCar(req, res) {
    
  }

  static deleteCar(req, res) {

  }

}

module.exports = sellerController;