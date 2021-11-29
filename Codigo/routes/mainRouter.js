const express = require("express");
const router = express.Router();
const {check} = require('express-validator')

const mainController = require("../controllers/mainController");
const loginMiddleWare = require("../middlewares/loginMiddleware");

router.get("/",mainController.home);




router.get("/carrito",mainController.carrito);



router.get("/agregar",mainController.creacion)

router.post('/agregar', mainController.store )



router.get("/editar",mainController.edicion)

router.post("/user",loginMiddleWare,mainController.users)







module.exports= router;