const tokenService = require('./token-service.js');
const holidayService = require("./holiday-service.js");
const timeplanService = require("./timeplan-service.js");

const action = {
  getAdminFromToken: tokenService.getAdminFromToken,
  createHoliday: holidayService.createHoliday,
  getHoliday: holidayService.getHoliday,
  createTimeplan: timeplanService.createTimeplan,
  getTimeplan: timeplanService.getTimeplan,
}

module.exports = action;
