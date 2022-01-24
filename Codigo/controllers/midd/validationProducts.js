const path = require ('path')
const{ body } = require('express-validator');
module.exports = [
    body("name").isLength({min:5}).withMessage("El producto debe tener nombre de 5 caracteres"),
    body("description").isLength({min:20}).withMessage("Descripcion demasiado corta"),
    body('image').custom((value, {req})=>{
        let file = req.file;
        let acceptedExtensions = ['.jpg','.png','.gif'];

        if (!file){
            throw new Error('Tienes que subir una imagen');
        }else{
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extenciones de archivos permitidos son ${acceptedExtensions.join(',')}`);
            }
        }
        return true;
    })
]