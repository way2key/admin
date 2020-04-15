const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const holidaySchema = mongoose.Schema({
  title: {type: String, required:true},
  startTime: {type: String, required:true},
  endTime: {type: String, required:true},
  allowPresence: {type: Boolean, required:true},
});

holidaySchema.plugin(uniqueValidator);

module.exports = mongoose.model('Holiday', holidaySchema);
