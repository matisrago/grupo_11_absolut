const express = require('express');

const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productController');

/*** GET ALL PRODUCTS ***/ 
router.get('/:id', productsController.detalle);

module.exports = router;