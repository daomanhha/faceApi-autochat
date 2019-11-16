const express = require('express');
const Router = express.Router();
const webHookController = require('../controllers/webhookController/webhook.controller');

Router.get('/', webHookController.getWebHook);

Router.post('/', webHookController.postWebHook);

module.exports = Router;