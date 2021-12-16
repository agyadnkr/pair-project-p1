const { Car, Detail, User, Brand } = require('../models')

class sellerController {

  static carList(req, res) {

    let value = {
      include: [Detail, Brand]
    }

    Car.allCarList(value)
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
      res.send(err) // <== kasih alert nanti
    })

  }

  static editCarForm(req, res) {
    let carData;

    Car.findByPk(req.params.carId, {
      include: [Detail]
    })
      .then(data =>{
        carData = data
        return Brand.findAll()
      })
      .then(brandData => {
        res.render('editCarForm', {brandData, carData})
      })
      .catch(err => {
        res.send(err)
      })
 
  }

  static editCar(req, res) {
    const { model, imageUrl, year, color, price, BrandId, cc, mileage, transmission, description } = req.body

    let value = { model, imageUrl, year, color, price, BrandId, cc, mileage, transmission, description, updatedAt: new Date() }

    let detailId;
    let CarId;

    Car.findByPk(req.params.carId, {
      include: [Detail, Brand]
    })
    .then(data => {
      // res.send(data)
      detailId = data.Detail.id
      CarId = data.id

      Car.update(value, {
        where: {
          id: req.params.carId
        }
      })
    })
    
    .then (data => {
      value = { cc, mileage, transmission, description, CarId, updatedAt: new Date() }
      return Detail.update(value, {
        where: {
          id: detailId
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
    let detailData;
    let carData;

    Car.findByPk(req.params.carId, {
      include: [Detail]
    })
      .then(data => {
        carData = data

        carData.destroy()
      })
      .then(data => {
        res.redirect('/sell')
      })

      .catch(err => {
        res.send(err)
      })


  }

}

module.exports = sellerController;