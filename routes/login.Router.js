const express = require('express');
const router = express.Router();
const loginController = require('../controllers/indexController/login.controller');
const validateLogin = require('../middleware/validate.middleware');


router.get('/', loginController.getLogin);

router.post('/',validateLogin.loginValidate, loginController.postLogin);


module.exports = router;
