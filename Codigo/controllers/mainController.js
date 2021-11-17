const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
    home: (req,res)=> {
        const productsDestacado = products.filter((prod) => prod.category === 'destacado');
		const productsOfertas = products.filter((prod) => prod.category === 'oferta');
        res.render("home",{productsDestacado,productsOfertas});

    },
    registro: (req,res)=>{
        res.render("formDeRegistro")
    },
    login: (req, res)=>{
        res.render("formDeLogin")
    },
    carrito: (req,res)=>{
        res.render("carrito")
    },
    creacion: (req,res)=>{
        res.render("creacionProducto")
    },
    edicion:(req,res)=>{
        res.render("edicionProducto")
    }
}

module.exports= mainController;