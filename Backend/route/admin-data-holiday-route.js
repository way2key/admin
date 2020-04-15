const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const adminDataHoliday = require('../controller/admin-data-holiday-controller');

//Routes
router.post('/', adminDataHoliday.createHoliday);
router.get('/', adminDataHoliday.getHoliday);

module.exports = router;
