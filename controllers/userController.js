const { Car, Detail, User, Brand } = require('../models')
const sendEmail = require('../helpers/sendEmail.js')

class userController {

  static buyerCarList(req, res) {
    let value

    if (req.query.sortBy === `price`) {
      value = {
        include: [Detail, Brand],
        order: [
          ['price', 'DESC'],
          ['model', 'ASC'],
        ]
      }
    } else if (req.query.sortBy === `year`) {
      value = {
        include: [Detail, Brand],
        order: [
          ['year', 'DESC'],
          ['model', 'ASC'],
        ]
      }
    } else {
      value = {
        include: [Detail, Brand]
      }

      Car.allCarList(value)
        .then(data => {
          res.render('buyerCarList', { data })
        })
        .catch(err => {
          res.send(err)
        })
    }
  }


  static buyCar(req, res) {
    let id = req.params.carId

    Car.update({
      status : "Sold"
    }, {
      where: {
        id:req.params.carId
      }
    })
    .then(data => {
      sendEmail(data)
      res.redirect(`/user`)
    })
    .catch(err => {
      res.send(err)
    })
  }





}

module.exports = userController;