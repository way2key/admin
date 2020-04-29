const express = require('express');
const router = express.Router();

const serverUserController = require('../controller/server-user-controller');

//Routes
router.get('/:token', serverUserController.getUserFromToken);


module.exports = router;
