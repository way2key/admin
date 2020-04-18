const tokenService = require('./token-service.js');
const holidayService = require("./holiday-service.js");
const timeplanService = require("./timeplan-service.js");
const clockMachineService = require("./clock-machine-service.js");

const action = {
  getAdminFromToken: tokenService.getAdminFromToken,
  createHoliday: holidayService.createHoliday,
  getHoliday: holidayService.getHoliday,
  createTimeplan: timeplanService.createTimeplan,
  getTimeplan: timeplanService.getTimeplan,
  getShiftFromId: timeplanService.getShiftFromId,
  createClockmachine: clockMachineService.createClockmachine,
  getClockmachine: clockMachineService.getClockmachine,
}

module.exports = action;
