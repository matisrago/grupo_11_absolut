const path = require ('path')
const{ body } = require('express-validator');
module.exports = [
    body("name").isLength({min:3}).withMessage("El Nombre debe tener al menos 4 caracteres"),
    body("surname").isLength({min:5}).withMessage("El Apellido debe tener nombre de 5 caracteres"),
    body('email').notEmpty().withMessage('tienes que escribir el correo electronico').bail()
    .isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('image').custom((value, {req})=>{
        let file = req.file;
        let acceptedExtensions = ['.jpg','.png','.gif','.jpeg'];

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