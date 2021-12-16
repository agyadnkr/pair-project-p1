const { Car, Detail, User } = require('../models')

class sellerController {

  static carList(req, res) {
    Car.findAll({
      include: [{
        model: Detail
      }]
    })
      .then(data => {
        res.render('sellerCarList', {data})
      })
      .catch(err => {
        res.send(err)
      })
  }
}

module.exports = sellerController;