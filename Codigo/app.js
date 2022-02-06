const express = require('express');
const app = express()
var path = require('path');
const methodOverride =  require('method-override');
const session = require('express-session')
const rutasMain = require("./routes/mainRouter")
const rutasProducts = require('./routes/productsRouter')
const rutasUsers = require('./routes/userRouter')
const apiRutaUsers = require('./routes/api/user')
const apiRutaProducts = require('./routes/api/products')
const apiRutaProductsCategory = require('./routes/api/productsCategory')

const port = 3030
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(methodOverride('_method'));
app.use(session({secret:'secreto',
resave: false,
saveUninitialized : false
}
));
app.listen(port, () => {
    console.log("Funcionando")
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use("/",rutasMain)
app.use("/products", rutasProducts);
app.use('/users',rutasUsers);
app.use("/api/users",apiRutaUsers);
app.use("/api/products",apiRutaProducts);
app.use("/api/category",apiRutaProductsCategory);
