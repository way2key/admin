const tokenService = require('./token-service');
const holidayService = require('./holiday-service');
const timeplanService = require('./timeplan-service');
const userService = require('./user-service');
const weekService = require('./week-service');

const action = {
  getAdminFromToken: tokenService.getAdminFromToken,
  createHoliday: holidayService.createHoliday,
  getHoliday: holidayService.getHoliday,
  deleteHoliday: holidayService.deleteHoliday,
  createTimeplan: timeplanService.createTimeplan,
  getTimeplan: timeplanService.getTimeplan,
  getShiftFromId: timeplanService.getShiftFromId,
  deleteTimeplan: timeplanService.deleteTimeplan,
  createAStudent: userService.createAStudent,
  getAllStudents: userService.getAllStudents,
  allotStudent: userService.allotStudent,
  deleteStudent: userService.deleteStudent,
  getUserFromToken: userService.getUserFromToken,
  createWeek: weekService.createWeek,
  getAllWeeks: weekService.getAllWeeks,
  deleteWeek: weekService.deleteWeek,
}

module.exports = action;
