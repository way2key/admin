const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const dayPlanSchema = mongoose.Schema({
  requiredTime: {type: Number, required:true},
  shift: {type: [String], required:true},
});

dayPlanSchema.plugin(uniqueValidator);

module.exports = mongoose.model('DayPlan', dayPlanSchema);
