const { Car, Detail, User, Brand } = require('../models')
const passport = require('passport')

class loginController {
  static registerForm(req, res) {
    let msg
    res.render('registerForm', { msg })
  }

  static registerSubmit(req, res) {
    const { username, password, password2, email, phone } = req.body
    let value =  { username, password, email, phone }
    let msg = [];

    if (!password) {
      User.create(value)
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        err.errors.forEach(el => {
          msg.push(el.message)
        });
        res.render('registerForm', { msg, username, email, phone })
      })
    } else if (password !== password2) {
      msg.push('Paswords do not match');
      User.create(value)
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        err.errors.forEach(el => {
          msg.push(el.message)
        });
        res.render('registerForm', { msg, username, email, phone })
      })
    } else if (password === password2) {
      User.create(value)
      .then(data => {
        req.flash('success_msg', 'Account created')
        res.redirect('/login')
      })
      .catch(err => {
        err.errors.forEach(el => {
          msg.push(el.message)
        });
        res.render('registerForm', { msg })
      })
    }
  }

  static loginForm(req, res) {
    res.render('loginForm');
  }

  static loginSubmit(req, res, next) {
    // res.send(req.body)
    passport.authenticate('local', {
      successRedirect: '/sell',
      failureRedirect: '/login',
      failureFlash: true
    })(req, res, next);
  }

  static logout(req, res) {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/login');
  }
}

module.exports = loginController;