const express = require('express');
const bodyParser = require('body-parser');

const db = require('./database/db');

const adminAuthRoute = require('./route/admin-auth-route.js');
const adminDashboardRoute = require('./route/admin-dashboard-route.js');
const adminDataHolidayRoute = require('./route/admin-data-holiday-route.js');
const adminDataTimeplanRoute = require('./route/admin-data-timeplan-route.js');

const api = express();

api.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

api.use(bodyParser.json());
api.use('/api/admin-data-timeplan', adminDataTimeplanRoute);
api.use('/api/admin-data-holiday', adminDataHolidayRoute);
api.use('/api/admin-dashboard', adminDashboardRoute);
api.use('/api/admin-auth', adminAuthRoute);


module.exports = api;
