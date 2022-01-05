const path = require ('path')
const{ body } = require('express-validator');


module.exports = [
    body('name').notEmpty().withMessage('Tienes que escribir el Nombre'),
    body("surname").notEmpty().withMessage("Tienes que escribir tu apellido"),
    body('email').notEmpty().withMessage('tienes que escribir el correo electronico').bail()
    .isEmail().withMessage('debes escribir un formato de correo válido'),
    body('password').isLength({min:8}).withMessage('La contraseña debe tener minimo 8 caracteres'),
    body('conditions').notEmpty().withMessage('tienes que aceptar los terminos y condiciones'),
    body('date').notEmpty().withMessage('Tienes que completar la fecha'),
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