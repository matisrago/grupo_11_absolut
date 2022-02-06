const express = require("express");
const router = express.Router();
const apiProductsController = require("../../controllers/api/apiProductsController")

router.get("/",apiProductsController.listar)
router.get("/:id",apiProductsController.detalle)
router.get("/max/last",apiProductsController.maximo)
router.get("/category/:id",apiProductsController.categoria1)

module.exports = router