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
    users : (req,res)=>{
        res.redirect("/")
    },
    carrito: (req,res)=>{
        res.render("carrito")
    },
    creacion: (req,res)=>{
        res.render("creacionProducto")
    },
    edicion:(req,res)=>{
        res.render("edicionProducto")
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