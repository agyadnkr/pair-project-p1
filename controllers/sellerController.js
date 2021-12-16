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
}

module.exports = sellerController;