const express = require('express');
const userControllers = require('../controllers/userControllers');
const path = require('path')
const router = express.Router();
const {check} = require('express-validator');
const usersControllers = require('../controllers/userControllers');
const validations = require('../middlewares/validationRegister');

const multer = require('multer')


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


router.get("/login",userControllers.login)
router.post("/login", [check('email').isEmail().withMessage('Email invalido')], userControllers.processLogin)

router.get("/formulario",userControllers.registro);
router.post("/formulario",upload.single('imagenUsuario'),validations,usersControllers.processRegister)




module.exports = router