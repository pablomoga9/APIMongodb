const express = require('express');
// Rutas de productos
const productsApiController = require("../controllers/productsApiController");
const productsApiRouter = express.Router();

const checkApiKey = require('../middlewares/auth_API_KEY');

// /products API
productsApiRouter.get('/:id?',productsApiController.getProducts);
productsApiRouter.post('/',checkApiKey,productsApiController.createProduct);
productsApiRouter.delete('/',checkApiKey, productsApiController.deleteProduct);

module.exports = productsApiRouter;

/*
http://localhost:3000/api/products --> GET /products
http://localhost:3000/api/products/3 --> GET /products/3
http://localhost:3000/api/products --> POST /products
http://localhost:3000/api/products --> DELETE /products
*/