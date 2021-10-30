const express = require('express')
const app = express()
var path = require('path');
const rutas = require("./routes/mainRouter")

const port = 3030
app.use(express.static("public"));
app.listen(port, () => {
    console.log("Funcionando")
})

app.set('view engine', 'ejs');
app.set('views', './views');

app.use("/",rutas)

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"./views/home.html"))
// })
// app.get("/detalle",(req,res)=>{
//     res.sendFile(path.join(__dirname,"./views/detalleProducto.html"))
// })

// app.get("/formulario",(req,res)=>{
//     res.sendFile(path.join(__dirname,"./views/formDeRegistro.html"))
// })
// app.get("/login",(req,res)=>{
//     res.sendFile(path.join(__dirname,"./views/formDeLogin.html"))
// })
// app.get("/carrito",(req,res)=>{
//     res.sendFile(path.join(__dirname,"./views/carrito.html"))
// })
