const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const adminClockMachineController = require('../controller/admin-clock-machine-controller');

//Routes
router.post('/', adminClockMachineController.createClockmachine);


module.exports = router;
