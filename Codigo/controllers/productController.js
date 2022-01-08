const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
let db = require("../database/models")

const productController = {
	detalle: (req, res) => {
		db.Products.findByPk(req.params.id)
		.then((product)=>{res.render('detalleProducto',{product,user :req.session.usuarioLogueado})})
	},
	crear: (req,res ) => {
		
		res.render('creacionProducto',{user :req.session.usuarioLogueado})
	},
	editar: (req,res)=> {
		const productsDetails = products.find(prod=> prod.id == req.params.id)
		res.render('edicionProducto',{productsDetails,user :req.session.usuarioLogueado})
	},
	agregar: (req,res ) => {
		
		const productId = req.params.id;

		const productIndex = products.findIndex((p) => p.id == productId);

		const updatedProduct = {
			...products[productIndex],
			...req.body,
			price: Number (req.body.price),
			discount: Number (req.body.discount),
			
		};
		products[productIndex] = updatedProduct;
		fs.writeFileSync(-productsFilePath,JSON.stringify(products, null," "));

		res.redirect('/')
	},
	destroy: (req,res) => {
		let productABorrar = req.params.id;
	
	db.Products.destroy({
		where: [{ id: productABorrar}]
	})
	.then( function () {
		return res.redirect ('/');
	})
	.catch( e => {console.log(e)})
	}
	,
	listado: (req,res)=>{
		db.Products.findAll()
		.then(function(productos){
			res.render("listadoProductos",{productos:productos})
		})
	}
}


    module.exports = productController;