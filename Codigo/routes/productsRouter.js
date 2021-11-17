const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productController');

/*** GET ALL PRODUCTS ***/ 
router.get('/:id', productsController.detalle);
router.get('/:id/editar',productController.crear);

router.put('/')

module.exports = router;