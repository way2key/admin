const tokenService = require('./token-service.js');
const holidayService = require("./holiday-service.js");

const action = {
  getAdminFromToken: tokenService.getAdminFromToken,
  createHoliday: holidayService.createHoliday,
  getHoliday: holidayService.getHoliday,
}

module.exports = action;
