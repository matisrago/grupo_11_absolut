const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
let db = require("../database/models");




const usersControllers = {
    login: (req, res)=>{
        res.render("formDeLogin",{user :req.session.usuarioLogueado})
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
                    req.session.usuarioLogueado = result
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
        res.render("formDeRegistro",{user :req.session.usuarioLogueado})
        },
    create: (req, res) =>{
        db.Users.findOne({
            where : {
                email : req.body.email,
            }
        }).then((resultado)=>{
            let errors = null
		errors = validationResult(req);
            if(resultado != null && errors.isEmpty()){
                res.render("formDeRegistro",{errors:[{msg: "Email ya en uso"}],user :req.session.usuarioLogueado})    
            }else if(resultado == null && errors.isEmpty()){
                db.Users.create({
                    name:req.body.name ,
                    surname: req.body.surname,
                    email: req.body.email,
                    date: req.body.date,
                    password: bcrypt.hashSync(req.body.password, 10),
                    repeatPassword: bcrypt.hashSync(req.body.repeatPassword, 10),
                    image : req.file.filename,
                    detail: '/api/users/'
                    })
                    .then(user=>{
                        user.update({
                            detail:'/api/users/' + user.id
                        })
                    })
                    res.redirect("/")
            }else if(resultado != null){
                res.render("formDeRegistro",{errors:[{msg: "Email ya en uso"},errors.errors],user :req.session.usuarioLogueado}) 
            }else{
                res.render("formDeRegistro",{errors:errors.errors,user :req.session.usuarioLogueado})    
            }
        }).catch(()=>{
            db.Users.create({
                name:req.body.name ,
                surname: req.body.surname,
                email: req.body.email,
                date: req.body.date,
                password: bcrypt.hashSync(req.body.password, 10),
                repeatPassword: bcrypt.hashSync(req.body.repeatPassword, 10),
                image : req.body.imagenUsuario
                })
                res.redirect("/")
        })
        
    },
    detalle: (req,res)=>{
        db.Users.findOne({
            where : {id: req.params.id}
        }).then((resultado)=>{
            res.render('perfil',{user: resultado})

        }).catch(()=>{
            res.render("formDeLogin")
        })
        
    
    },
    actualizar:(req,res)=>{
        let errors = null
		errors = validationResult(req); 
        if(errors.isEmpty()){ 
        db.Users.update({
            name: req.body.name,
            surname: req.body.surname,
            date : req.body.date,
            email : req.body.email,
            image : req.file.filename
        },
        {
            where : {id : req.params.id}
        }

        )
        
        res.redirect('/users/detalle/'+req.params.id)
        }else{
            db.Users.findOne({
                where : {id: req.params.id}
            }).then((resultado)=>{
            res.render('edicionPerfil',{errors:errors.errors,user: resultado})
        })
    }
        
    },
    edicion: (req,res)=>{

        db.Users.findOne({
            where : {id: req.params.id}
        }).then((resultado)=>{
            res.render('edicionPerfil',{errors:null,user: resultado})

        }).catch(()=>{
            res.render("formDeLogin")
        })
    },

}
module.exports = usersControllers;

