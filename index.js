const express = require('express')
const { getAllManufacturers, getManufacturerById } = require('./controllers/manufacturers')
const { getAllProducts, getProductById } = require('./controllers/products')

const app = express()

app.get('/manufacturers', getAllManufacturers)

app.get('/manufacturers/:id', getManufacturerById)

app.get('/products', getAllProducts)

app.get('/products/:id', getProductById)

app.listen(1346, () => {
  console.log('Listening on port 1346...') // eslint-disable-line no-console
})
