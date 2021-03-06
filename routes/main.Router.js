const express = require('express');
const Router = express.Router();
const mainController = require('../controllers/mainController/main.controller');


Router.get('/', mainController.getMain);

Router.post('/', mainController.postMain);

module.exports = Router;