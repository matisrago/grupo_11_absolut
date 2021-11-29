const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const usersControllers = {
    login: (req, res)=>{
        res.render("formDeLogin")
    },
    processLogin: (req,res) =>{
        let errors = validationResult(req);
        if(errors.isEmpty()){
        }else{
            return res.render('formDeLogin',{errors:errors.errors})
        }
}
}
module.exports = usersControllers;