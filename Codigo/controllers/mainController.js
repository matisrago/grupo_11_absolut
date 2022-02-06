const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs')
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const userFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const db = require('../database/models')


const mainController = {
    home: (req,res)=> {
        db.Products.findAll()
        .then((products)=>{const productsDestacado = products.filter((prod) => prod.id_ubicacion === 2);
		const productsOfertas = products.filter((prod) => prod.id_ubicacion === 1);
        res.render("home",{productsDestacado,productsOfertas,user :req.session.usuarioLogueado});})

    },
    
    login: (req, res)=>{
        res.render("formDeLogin")
    },
    users : (req,res)=>{
        res.redirect("/")
    },
    carrito: (req,res)=>{
        res.render("carrito",{user :req.session.usuarioLogueado})
    },
    creacion: (req,res)=>{
        res.render("creacionProducto",{errors: null,user :req.session.usuarioLogueado})
    },
    edicion:(req,res)=>{
        res.render("edicionProducto",{user :req.session.usuarioLogueado})
    },
    
    store: (req,res) => {
        let errors = null
        errors = validationResult(req)
        if(errors.isEmpty()){
            let ubicacionCategoria = null
            if(req.body.ubicacion === "oferta"){
                ubicacionCategoria = 1	
            }else{
                ubicacionCategoria = 2
            }
            let productoCategoria = null
            if(req.body.category === "vodka"){
                productoCategoria = 1
            }else if(req.body.category === "cervezas"){
                productoCategoria = 2
            }else{
                productoCategoria = 3
            }
            db.Products.create({
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            image:'/images/'+ req.file.filename,
            id_category: productoCategoria,
            id_ubicacion: ubicacionCategoria,
            detail:'/api/products/'
            })
            .then((product)=>{product.update({
                detail:'/api/products/' + product.id
            })})
            
            res.redirect('/');
        }else{
            res.render("creacionProducto",{errors:errors.errors,user:req.session.usuarioLogueado})
        }

	}
}


module.exports= mainController;