const express = require("express");
const router = express.Router();
const apiProductsController = require("../../controllers/api/apiProductsController")

router.get("/",apiProductsController.listar)
router.get("/:id",apiProductsController.detalle)

module.exports = router