const express = require('express')
const app = express()
var path = require('path');
const port = 3030
app.use(express.static("public"));
app.listen(port, () => {
    console.log("Funcionando")
})
app.get("/detalle",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/detalleProducto.html"))
})

app.get("/formulario",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/formDeRegistro.html"))
})
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/formDeLogin.html"))
})
