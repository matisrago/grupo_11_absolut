function authMiddleware(req,res,next){
    if(req.session.usuarioLogueado != undefined){
        next()
    }else{
        res.send("Esta pagina es solo para Usuarios logueados")
    }

}

module.exports = authMiddleware;