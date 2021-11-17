const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {
	detalle: (req, res) => {
		const productsDetails = products.find(prod=> prod.id == req.params.id)
		res.render('detalleProducto',{productsDetails})
	},
	crear: (req,res ) => {
		
		res.render('creacionProducto')
	},
	editar: (req,res)=> {
		const productsDetails = products.find(prod=> prod.id == req.params.id)
		res.render('edicionProducto',{productsDetails})
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
		fs.writeFileSync(productsFilePath,JSON.stringify(products, null," "));

		res.redirect('/')
	},
	destroy: (req,res) => {

		const productIndex = products.findIndex((producto)=> {
			return (producto.id == req.params.id)
		});
		products.splice(productIndex,1);

		fs.writeFileSync(productsFilePath,JSON.stringify(products,null," "));

		res.redirect('/')
	}
}
	



    module.exports = productController;