const express = require('express');
const twitterMessage = express.Router();
const twitterMessageController = require('../controllers/twitterMessage.controller.js');

// Retrieve all Users
twitterMessage.get('/', twitterMessageController.findAll);

module.exports = twitterMessage;