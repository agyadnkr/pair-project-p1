const { Car, Detail, User, Brand } = require('../models')

class sellerController {

  static carList(req, res) {
    Car.findAll({
      include: [Detail, Brand]
    })
      .then(data => {
        res.send(data)
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
        res.send(data)
        // return Detail.create(valueDetail)   
      })
      .then(data => {
        res.redirect('/sell')
      })
      .catch(err => {
        res.send(err) // <== kasih alert nanti
      })




  }
}

module.exports = sellerController;