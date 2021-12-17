const express = require('express')
const app = express()
const port = 3000
const indexRouter = require('./routes/indexRouter.js')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport');

// Passport config
require('./helpers/passport')(passport);

// EJS
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended : true}));

//Express Session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}))

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash())

// Global vars
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
})

//Routing
app.use('/', indexRouter)

//Bodyparser
app.use(express.urlencoded({ extended : true }))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


// npx sequelize-cli model:generate --name Detail --attributes cc:integer,mileage:integer,transmission:string,description:text

// npx sequelize-cli model:generate --name Brand --attributes brandName:string

// npx npx sequelize-cli migration:generate --name add-FK-CarId