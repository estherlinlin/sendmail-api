const express = require('express');
const router = express.Router();
const mailController = require('../controllers/mail');


router.post('/sendmail',  mailController.postSendEmail);

module.exports = router;