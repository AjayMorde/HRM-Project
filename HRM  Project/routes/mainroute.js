const express = require('express');

const router = express.Router();


const mainpageController = require('../controllers/mainpage');




router.get('', mainpageController.signuppage);


module.exports = router;