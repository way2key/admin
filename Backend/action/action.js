const tokenService = require('./token-service.js');


const action = {
  getAdminFromToken: tokenService.getAdminFromToken,
}

module.exports = action;
