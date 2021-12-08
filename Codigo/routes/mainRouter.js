const express = require("express");
const router = express.Router();
const {check} = require('express-validator')

const mainController = require("../controllers/mainController");


router.get("/",mainController.home);


 

router.get("/carrito",mainController.carrito);


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