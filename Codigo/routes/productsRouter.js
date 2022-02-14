const express = require('express');
const productController = require('../controllers/productController');
const multer = require('multer')
const path = require('path')
const router = express.Router();
const validation = require("../controllers/midd/validationProducts")

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/images')
    },
    filename: function(req,file,cb){
        const imageName = Date.now() + path.extname(file.originalname)
        cb(null,imageName)
    }
})

const upload = multer({storage:storage})
// ************ Controller Require ************
const productsController = require('../controllers/productController');

/*** GET ALL PRODUCTS ***/ 
router.get("/listado",productController.listado)
router.get('/busqueda',productController.search)
router.get('/:id', productsController.detalle);
router.get('/:id/editar',productController.editar);
router.put('/:id',upload.single('image'),validation,productsController.editarProceso)
router.delete('/:id', productsController.destroy)

router.post('/delete/:id', productController.destroy);
module.exports = router;
