const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs')

const productsFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const User = require ('../models/user')


const usersControllers = {
    login: (req, res)=>{
        res.render("formDeLogin")
    },
    registro: (req,res)=>{
        res.render("formDeRegistro")
    },
    processLogin: (req,res) =>{
        let errors = validationResult(req);
        if(errors.isEmpty()){
            for(let i = 0 ; i< users.length ; i++){
                let userPassword  = req.body.password
                if(users[i].email === req.body.usuario && (users[i].password == req.body.password || users[i].repeatPassword == req.body.password)){
                    
                    var usuarioALoguearse = users[i]
                    
                }
            }
            if(usuarioALoguearse == undefined){
                return res.render("formDeLogin",{errors:[{msg:"Credenciales invalidas"}]})
            }
            
        }else{
            return res.render('formDeLogin',{errors:errors.errors})
        }
        req.session.usuarioLogueado = usuarioALoguearse
        res.redirect("/")
    },
    formulario:(req,res)=>{
        res.render("formDeRegistro")
        },
    
    processRegister: (req, res) =>{
        let errors = validationResult(req);
        if(errors.isEmpty()){
            res.redirect('/')  
        }else{
            return res.render('formDeRegistro',{errors:errors.errors})
        }
        
        let userInDB = User.findByField('email', req.body.email);

        if (userInDB) {
            return res.render ('formDeRegistro',{
                errors: {
                    email:{
                        msg: 'Este email ya  está registrado'
                    }
                },
                oldData: req.body
            });
        }
        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            repeatPassword: bcryptjs.hashSync(req.body.repeatPassword, 10),
            avatar: req.file.filename

        }

        User.create(userToCreate);
        return res.send('ok se guardo el usario');

    }

}
module.exports = usersControllers;