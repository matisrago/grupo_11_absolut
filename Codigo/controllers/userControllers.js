const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs')
const productsFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
let db = require("../database/models");
const { resolve } = require('dns');



const usersControllers = {
    login: (req, res)=>{
        res.render("formDeLogin")
    },
    processLogin: (req,res) =>{
        let errors = validationResult(req);
        if(errors.isEmpty()){
            db.Users.findOne({
                where: {
                    email : req.body.email
                }
            }).then((result)=>{
                if(bcrypt.compareSync(req.body.password,result.password)){
                    var usuarioALoguearse = result;
                    req.session.usuarioLogueado = usuarioALoguearse
                    res.redirect("/")
                }else{
                    res.render("formDeLogin",{errors:[{msg:"Credenciales invalidas"}]})
                }
            }).catch(()=>{
                res.render("formDeLogin",{errors:[{msg:"Credenciales invalidas"}]})
            })
            
        }else{
            return res.render('formDeLogin',{errors:errors.errors})
        }

    },
    formulario:(req,res)=>{
        res.render("formDeRegistro")
        },
    create: (req, res) =>{

                db.Users.create({
                    name:req.body.name ,
                    surname: req.body.surname,
                    email: req.body.email,
                    date: req.body.date,
                    password: bcrypt.hashSync(req.body.password, 10),
                    repeatPassword: bcrypt.hashSync(req.body.repeatPassword, 10),
                    image : req.file.filename
                })
                res.redirect("/") 
        
    },
    detalle: (req,res)=>{
        if(req.session.usuarioLogueado != undefined){
            res.render('perfil',{user :req.session.usuarioLogueado})
        }else{
            res.render("formDeLogin")
        }
    }


}
module.exports = usersControllers;

