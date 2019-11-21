const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const routesController = require('../controllers/routesController')

const router = express.Router();

router.get('/', routesController.getShop);

module.exports = router;
