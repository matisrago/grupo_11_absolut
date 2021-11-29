const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");
const loginMiddleWare = require("../middlewares/loginMiddleware");

router.get("/",mainController.home);

router.get("/formulario",mainController.registro);

router.get("/carrito",mainController.carrito);

router.get("/login",mainController.login)

router.get("/agregar",mainController.creacion)

router.post('/agregar', mainController.store )

router.get("/editar",mainController.edicion)

router.post("/user",loginMiddleWare,mainController.users)







module.exports= router;