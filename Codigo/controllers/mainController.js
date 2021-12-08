const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const userFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));


const mainController = {
    home: (req,res)=> {
        const productsDestacado = products.filter((prod) => prod.category === 'destacado');
		const productsOfertas = products.filter((prod) => prod.category === 'oferta');
        res.render("home",{productsDestacado,productsOfertas,user :req.session.usuarioLogueado});

    },
    
    login: (req, res)=>{
        res.render("formDeLogin")
    },
    processLogin: (req,res) =>{
        let errors = validationResult(req);
        if(errors.isEmpty()){
            for(let i = 0 ; i< users.length ; i++){
                if(users[i].email === req.body.usuario && (users[i].password == req.body.password || users[i].repeatPassword == req.body.password)){
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

    },
    users : (req,res)=>{
        res.redirect("/")
    },
    carrito: (req,res)=>{
        res.render("carrito",{user :req.session.usuarioLogueado})
    },
    creacion: (req,res)=>{
        res.render("creacionProducto",{user :req.session.usuarioLogueado})
    },
    edicion:(req,res)=>{
        res.render("edicionProducto",{user :req.session.usuarioLogueado})
    },
    
    store: (req,res) => {
		const nuevoProducto = req.body;
    
        nuevoProducto.id = products[products.length-1].id + 1;

        products.push(nuevoProducto);

        fs.writeFileSync(productsFilePath, JSON.stringify(products, null," "));

        
        res.redirect('/');
	}
}


module.exports= mainController;