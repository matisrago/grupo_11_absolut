const express = require('express');
const userControllers = require('../controllers/userControllers');
const multer = require('multer')
const path = require('path')
const router = express.Router();
const {check} = require('express-validator')

router.get("/login",userControllers.login)
router.post("/login", [check('email').isEmail().withMessage('Email invalido')], userControllers.processLogin)


module.exports = router