const { RSA_NO_PADDING } = require("constants");
const fs = require("fs");
const path = require("path")
const userFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

function loginMiddleWare(req , res ,next){
    let usuarioEmail = req.body.usuario;
    let usuarioPassword = req.body.contraseña
    for(var i = 0; i<users.length ; i++){
        if(users[i].email == usuarioEmail && users[i].password === usuarioPassword){
            next()
        }
     
    }
    
    res.render("formDeLogin")
}

module.exports = loginMiddleWare