const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const shiftSchema = mongoose.Schema({
  startTime: {type: String, required:true},
  endTime: {type: String, required:true},
});

shiftSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Shift', shiftSchema);
