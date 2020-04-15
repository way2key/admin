const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const adminAuthController = require('../controller/admin-auth-controller');

//Routes
router.get('/verifyToken/:token', adminAuthController.verifyToken);
router.post('/signup/admin', adminAuthController.signupAdmin);
router.post('/login', adminAuthController.login);

module.exports = router;
