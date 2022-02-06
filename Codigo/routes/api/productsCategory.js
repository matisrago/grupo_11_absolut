const express = require("express");
const router = express.Router();
const apiProductsCategoryController = require("../../controllers/api/apiProductsCategoryController")

router.get("/",apiProductsCategoryController.listar)

module.exports = router