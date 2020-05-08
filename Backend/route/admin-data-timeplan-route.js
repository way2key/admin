const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const adminDataTimeplan = require('../controller/admin-data-timeplan-controller');

//Routes
router.post('/', auth, adminDataTimeplan.createTimeplan);
router.get('/timeplan', adminDataTimeplan.getTimeplan);
router.get('/timeplan/:timeplanId', adminDataTimeplan.getATimeplan);
router.delete('/timeplan/:timeplanId', auth, adminDataTimeplan.deleteTimeplan);

module.exports = router;
