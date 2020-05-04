const tokenService = require('./token-service.js');
const holidayService = require("./holiday-service.js");
const timeplanService = require("./timeplan-service.js");
const userService = require("./user-service.js");

const action = {
  getAdminFromToken: tokenService.getAdminFromToken,
  createHoliday: holidayService.createHoliday,
  getHoliday: holidayService.getHoliday,
  createTimeplan: timeplanService.createTimeplan,
  getTimeplan: timeplanService.getTimeplan,
  getShiftFromId: timeplanService.getShiftFromId,
  deleteTimeplan: timeplanService.deleteTimeplan,
  createAStudent: userService.createAStudent,
  getAllStudents: userService.getAllStudents,
  allotStudent: userService.allotStudent,
  getUserFromToken: userService.getUserFromToken,
}

module.exports = action;
