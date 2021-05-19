const models = require('../models')

const getAllProducts = async (request, response) => {
  try {
    const products = await models.Products.findAll({
      include: [{ model: models.Manufacturers }]
    })

    return response.send(products)
  } catch (error) {
    return response.status(500).send('Unable to retrieve products list')
  }
}

module.exports = {
  getAllProducts,
}