const express = require('express');
const router = express.Router();
const loginController = require('../controllers/indexController/login.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', loginController.getLogin);

router.post('/login',loginController.postLogin);

module.exports = router;
