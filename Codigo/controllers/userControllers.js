const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');

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
                if(users[i].email === req.body.usuario && users[i].password === req.body.password){
                        var usuarioALoguearse = users[i];
                        
                        
                }
            }
            if(usuarioALoguearse == undefined){
                return res.render("formDeLogin",{errors:[{msg:"Credenciales invalidas"}]})
            }
            req.session.usuarioLogueado = usuarioALoguearse
                res.redirect("/")

        }else{
            return res.render('formDeLogin',{errors:errors.errors})
        }

    }
}
module.exports = usersControllers;