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

const getProductById = async (request, response) => {
  try {
    const { id } = request.params

    const product = await models.Products.findOne({
      where: { id },
      include: [{ model: models.Manufacturers }]
    })

    return product ? response.send(product) : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve product')
  }
}

module.exports = {
  getAllProducts,
  getProductById,
}
