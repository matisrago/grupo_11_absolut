const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController")

router.get("/",mainController.home);

router.get("/detalle",mainController.detalle);

router.get("/formulario",mainController.registro);

router.get("/carrito",mainController.carrito);

router.get("/login",mainController.carrito)

module.exports= router;