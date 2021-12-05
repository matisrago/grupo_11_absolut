const express = require('express');
const userControllers = require('../controllers/userControllers');
const multer = require('multer')
const path = require('path')
const router = express.Router();
const {check} = require('express-validator')

router.get("/login",userControllers.login)
router.post("/login", [check('password').isLength({min:8}).withMessage('La contraseña debe tener minimo 8 caracteres')], userControllers.processLogin)
router.get("/formulario",userControllers.formulario)

module.exports = router