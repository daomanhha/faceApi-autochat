const express = require('express');
const router = express.Router();
const loginController = require('../controllers/indexController/login.controller');
const validateLogin = require('../middleware/validate.middleware');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
