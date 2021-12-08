function authMiddleware(req,res,next){
    if(req.session.usuarioLogueado != undefined){
        res.render('perfil',{user :req.session.usuarioLogueado})
    }else{
        res.render("formDeLogin")
    }

}

module.exports = authMiddleware;