const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const adminDataHolidayController = require('../controller/admin-data-holiday-controller');

//Routes
router.post('/', adminDataHolidayController.createHoliday);
router.get('/', adminDataHolidayController.getHoliday);

module.exports = router;
