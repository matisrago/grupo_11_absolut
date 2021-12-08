const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const bcrypt = require("bcryptjs")

const productsFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const usersControllers = {
    login: (req, res)=>{
        res.render("formDeLogin")
    },
    processLogin: (req,res) =>{
        let errors = validationResult(req);
        if(errors.isEmpty()){
            for(let i = 0 ; i< users.length ; i++){
                let userPassword  = req.body.password
                if(users[i].email == req.body.usuario && users[i].password == req.body.password){
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
    }
}
module.exports = usersControllers;