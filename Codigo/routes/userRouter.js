const express = require('express');
const userControllers = require('../controllers/userControllers');
const path = require('path')
const router = express.Router();
const {check} = require('express-validator');
const usersControllers = require('../controllers/userControllers');
const validations = require('../controllers/midd/validationRegister');
const authMiddleware = require('../controllers/midd/authMiddleware')
const multer = require('multer')
const validationEditPerfil = require('../controllers/midd/validationEditPerfil');

const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        const folder ='./public/images'
        cb(null,folder );
    },
    filename: (req, file, cb) => {
        const imageName = Date.now() + path.extname(file.originalname)
        cb(null,imageName );
    }
});
const upload = multer({storage})


router.get("/login",authMiddleware,userControllers.login)
router.post("/login", [check('password').isLength({min:8}).withMessage('La contraseña debe tener minimo 8 caracteres')], userControllers.processLogin)
router.get("/formulario",usersControllers.formulario)
router.post("/formulario",upload.single('imagenUsuario'),validations,usersControllers.create)
router.get("/detalle/:id",userControllers.detalle)
router.get("/edicion/:id",userControllers.edicion)
router.post("/detalle/:id", upload.single('image'),validationEditPerfil,userControllers.actualizar)


module.exports = router