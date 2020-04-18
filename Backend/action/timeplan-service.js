const DayPlan = require('../data-schematic/day-plan-schematic');
const Shift = require('../data-schematic/shift-schematic')

exports.createTimeplan = (dayplan) => {
  return new Promise( (resolve, reject) => {
    const promises = dayplan.shift.map(
      shift => {
        let newShift = new Shift({
          startTime: shift.start,
          endTime: shift.end,
        });
        return newShift.save();
      }
    );

    Promise.all(promises).then(
      result => {
        let finalShift = [];
        result.forEach(shift => finalShift.push(shift.id));
        let newDayPlan = new DayPlan({
          requiredTime: dayplan.requiredTime,
          startOfDay: dayplan.startOfDay,
          endOfDay: dayplan.endOfDay,
          shift: finalShift,
          name: dayplan.name
        });
        return newDayPlan.save();
      }
    )
    .then(
      () => resolve("DayPlan créé!")
    )
    .catch(
      error => reject("Impossible de créer le timeplan <= "+error)
    )
  })
}

exports.getTimeplan = () => {
  return new Promise( (resolve, reject) => {
    DayPlan.find()
    .then((timeplan) => resolve(timeplan))
    .catch(error => reject("Unable to fetch dayplan from db <= "+error));
  })
}

exports.getShiftFromId = (shiftId) => {
  return new Promise( (resolve, reject) => {
    Shift.findOne({_id:shiftId})
    .then((shift) => resolve(shift))
    .catch(error => reject("Unable to fetch shift from db <= "+error));
  })
}
