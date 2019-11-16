const express = require('express');
const router = express.Router();
const loginController = require('../controllers/indexController/login.controller');

router.get('/', loginController.getLogout);

module.exports = router;
