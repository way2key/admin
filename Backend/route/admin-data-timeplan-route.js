const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const adminDataTimeplan = require('../controller/admin-data-timeplan-controller');

//Routes
router.post('/', auth, adminDataTimeplan.createTimeplan);
router.get('/', auth, adminDataTimeplan.getTimeplan);

module.exports = router;
