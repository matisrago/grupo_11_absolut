const fs = require('fs');
const path = require('path');

let db = require("../database/models")

const productController = {
	detalle: (req, res) => {
		db.Products.findAll()
		.then((products)=>{db.Products.findByPk(req.params.id)
			.then((product)=>{res.render('detalleProducto',{product,products,user :req.session.usuarioLogueado})})})
		
	},
	crear: (req,res ) => {
		
		res.render('creacionProducto',{user :req.session.usuarioLogueado})
	},
	editar: (req,res)=> {
		db.Products.findByPk(req.params.id)
		.then((product)=>{res.render('edicionProducto',{product,user :req.session.usuarioLogueado})})
		
	},
	agregar: (req,res ) => {
		let ubicacionCategoria = null
		if(req.body.category === "oferta"){
			ubicacionCategoria = 1	
		}else{
			ubicacionCategoria = 2
		}
		let productoAEditar = req.params.id
		let nombreEditado = req.body.name
		let descripcionEditada = req.body.description
		let precioEditado = req.body.price
		let categoriaEditada = ubicacionCategoria
		db.Products.findOne({
			where: [{ id: productoAEditar}]
		})
		.then((product)=>{
			product.update({
				name:nombreEditado,
				description:descripcionEditada,
				price:precioEditado,
				id_ubicacion:categoriaEditada
			})
		})

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