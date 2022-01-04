const express = require('express');
const productController = require('../controllers/productController');
const multer = require('multer')
const path = require('path')
const router = express.Router();
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'public/images')
    },
    filename: function(req,file,cb){
        cb(null,file.fieldname + '-' + Date.Now() + path.extname(file.originalname))
    }
})

const upload = multer({storage:storage})
// ************ Controller Require ************
const productsController = require('../controllers/productController');

/*** GET ALL PRODUCTS ***/ 
router.get("/listado",productController.listado)
router.get('/:id', productsController.detalle);
router.get('/:id/editar',productController.editar);

router.put('/:id',upload.single('image'),productsController.agregar)
router.delete('/:id', productsController.destroy)
module.exports = router;