const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const adminDataStudentController = require('../controller/admin-data-student-controller');

//Routes
router.put('/', auth, adminDataStudentController.allotStudent);
router.post('/', auth, adminDataStudentController.createAStudent);
router.get('/', auth, adminDataStudentController.getAllStudents);

module.exports = router;
