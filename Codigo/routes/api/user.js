const express = require("express");
const router = express.Router();
const apiUserController = require("../../controllers/api/apiUserController")

router.get("/",apiUserController.listar)
router.get("/:id",apiUserController.detalle)

module.exports = router