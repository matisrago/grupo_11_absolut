const express = require("express");
const router = express.Router();
const validation = require("../controllers/midd/validationProducts")
const authMiddleware = require('../controllers/midd/authMiddleware')
const mainController = require("../controllers/mainController");
const path = require('path')
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

router.get("/",mainController.home);

router.get("/carrito",mainController.carrito);

router.get("/agregar",mainController.creacion)

router.post('/agregar', upload.single('image'),validation,mainController.store )

router.get("/editar",mainController.edicion)


module.exports= router;