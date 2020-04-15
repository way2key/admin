const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const adminDataTimeplan = require('../controller/admin-data-timeplan-controller');

//Routes
router.post('/', adminDataTimeplan.createTimeplan);
router.get('/', adminDataTimeplan.getTimeplan);

module.exports = router;
