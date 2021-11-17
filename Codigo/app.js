const express = require('express')
const app = express()
var path = require('path');
const methodOverride =  require('method-override');

const rutasMain = require("./routes/mainRouter")
const rutasProducts = require('./routes/productsRouter')

const port = 3030
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.listen(port, () => {
    console.log("Funcionando")
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use("/",rutasMain)
app.use("/", rutasProducts);

