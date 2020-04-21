const tokenService = require('./token-service.js');
const holidayService = require("./holiday-service.js");
const timeplanService = require("./timeplan-service.js");
const studentService = require("./student-service.js");

const action = {
  getAdminFromToken: tokenService.getAdminFromToken,
  createHoliday: holidayService.createHoliday,
  getHoliday: holidayService.getHoliday,
  createTimeplan: timeplanService.createTimeplan,
  getTimeplan: timeplanService.getTimeplan,
  getShiftFromId: timeplanService.getShiftFromId,
  createAStudent: studentService.createAStudent,
  getAllStudents: studentService.getAllStudents,
}

module.exports = action;
