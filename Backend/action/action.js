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
  getATimeplan: timeplanService.getATimeplan,
  deleteTimeplan: timeplanService.deleteTimeplan,

  createAStudent: userService.createAStudent,
  getUserFromToken: userService.getUserFromToken,
  getAllStudents: userService.getAllStudents,
  allotStudent: userService.allotStudent,
  deleteStudent: userService.deleteStudent,

  createWeek: weekService.createWeek,
  getAWeek: weekService.getAWeek,
  getAllWeeks: weekService.getAllWeeks,
  deleteWeek: weekService.deleteWeek,
}

module.exports = action;
