const express = require('express');
const bodyParser = require('body-parser');

const adminDB = require('./database/adminDB');

const adminAuthRoute = require('./route/admin-auth-route');
const adminDashboardRoute = require('./route/admin-dashboard-route');
const adminDataStudentRoute = require('./route/admin-data-student-route');
const adminDataTimeplanRoute = require('./route/admin-data-timeplan-route');
const adminDataWeekRoute = require('./route/admin-data-week-route');
const adminDataHolidayRoute = require('./route/admin-data-holiday-route');
const serverUserRoute = require('./route/server-user-route');

const api = express();

api.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

api.use(bodyParser.json());
api.use('/api/server-user', serverUserRoute);
api.use('/api/admin-data-student', adminDataStudentRoute);
api.use('/api/admin-data-timeplan', adminDataTimeplanRoute);
api.use('/api/admin-data-week', adminDataWeekRoute);
api.use('/api/admin-data-holiday', adminDataHolidayRoute);
api.use('/api/admin-dashboard', adminDashboardRoute);
api.use('/api/admin-auth', adminAuthRoute);


module.exports = api;
