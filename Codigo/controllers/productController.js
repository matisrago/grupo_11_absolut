const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {
	detalle: (req, res) => {
		const productsDetails = products.find(prod=> prod.id == req.params.id)
		res.render('detalleProducto',{productsDetails})
	}}

    module.exports = productController;