const mainController = {
    home: (req,res)=> {
        res.render("home")
    },
    registro: (req,res)=>{
        res.render("formDeRegistro")
    },
    login: (req, res)=>{
        res.render("formDeLogin")
    },
    detalle: (req,res)=>{
        res.render("detalleProducto")
    },
    carrito: (req,res)=>{
        res.render("carrito")
    }
}

module.exports= mainController;