const express = require("express");
const router = express.Router();
const {check} = require('express-validator')

const mainController = require("../controllers/mainController");
const loginMiddleWare = require("../middlewares/loginMiddleware");

router.get("/",mainController.home);

router.get("/formulario",mainController.registro);

router.get("/carrito",mainController.carrito);

router.get("/login",mainController.login)

router.post("/login", [check('usuario').isEmail().withMessage('Email invalido')], mainController.processLogin)

router.get("/agregar",mainController.creacion)

router.post('/agregar', mainController.store )

router.get("/editar",mainController.edicion)

router.get("/check", function(req ,res){
    if(req.session.usuarioLogueado == undefined){
        res.send("No estas logueado")
    }else{
        res.send("El usuario logueado es"+ req.session.usuarioLogueado.email)
    }
})









module.exports= router;