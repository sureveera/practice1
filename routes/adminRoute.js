const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const routesController = require('../controllers/routesController')

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', routesController.getProduct);

// /admin/add-product => POST
router.post('/add-product', routesController.addProduct);

module.exports = router;
// exports.products = products;
