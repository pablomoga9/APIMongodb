const express = require('express');
// Rutas de productos
const providersApiController = require("../controllers/providersApiController");
const providersApiRouter = express.Router();

const checkApiKey = require('../middlewares/auth_API_KEY');

// /providers API
providersApiRouter.get('/',providersApiController.getProviders);
providersApiRouter.post('/',providersApiController.createProviders);
// providersApiRouter.delete('/',checkApiKey, providersApiController.deleteProduct);

module.exports = providersApiRouter;