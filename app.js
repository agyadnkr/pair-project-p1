const express = require('express')
const app = express()
const port = 3000
const indexRouter = require('./routes/indexRouter.js')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended : true}));

app.use('/', indexRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


// npx sequelize-cli model:generate --name Detail --attributes cc:integer,mileage:integer,transmission:string,description:text

// npx sequelize-cli model:generate --name Brand --attributes brandName:string

// npx npx sequelize-cli migration:generate --name add-FK-CarId