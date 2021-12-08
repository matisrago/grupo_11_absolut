const path = require ('path')
const{ body } = require('express-validator');


module.exports = [
    body('fName').notEmpty().withMessage('Tienes que escribir el Nombre'),
    body('email').notEmpty().withMessage('tienes que escribir el correo electronico').bail()
    .isEmail().withMessage('debes escribir un formato de correo válido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('conditions').notEmpty().withMessage('tienes que aceptar los terminos y condiciones'),
    body('date').notEmpty().withMessage('Tienes que completar la fecha'),
    body('repeat-password').notEmpty().withMessage('tienes que escribir una contraseña'),
    body('imagenUsuario').custom((value, {req})=>{
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