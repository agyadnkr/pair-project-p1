const { Car, Detail, User, Brand } = require('../models')

class buyerController {

  static buyerCarList(req, res) {

    let value = {
      include: [Detail, Brand]
    }

    Car.allCarList(value)
      .then(data => {
        res.render('buyerCarList', {data})
      })
      .catch(err => {
        res.send(err)
      })

  }

  

}

module.exports = buyerController;