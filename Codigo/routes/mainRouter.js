const express = require("express");
const router = express.Router();
const {check} = require('express-validator')
const authMiddleware = require('../controllers/midd/authMiddleware')
const mainController = require("../controllers/mainController");


router.get("/",mainController.home);

router.get("/carrito",mainController.carrito);

router.get("/agregar",mainController.creacion)

router.post('/agregar', mainController.store )

router.get("/editar",mainController.edicion)


module.exports= router;