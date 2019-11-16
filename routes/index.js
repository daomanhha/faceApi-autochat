const express = require('express');
const router = express.Router();
const loginController = require('../controllers/indexController/login.controller');
const validateLogin = require('../middleware/validate.middleware');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', loginController.getLogin);

router.post('/login',validateLogin.loginValidate, loginController.postLogin);

router.get('/logout',loginController.getLogout)

module.exports = router;
