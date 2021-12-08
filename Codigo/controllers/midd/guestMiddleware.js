function guestMiddleware(req,res,next){
    if(req.session.usuarioLogueado == undefined){
        next()
    }else{
        res.send("Esta pagina es solo para invitados, usted ya esta logueado con el email " + req.session.usuarioLogueado.email)
    }
}

module.exports = guestMiddleware;