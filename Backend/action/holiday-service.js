const Holiday = require('../data-schematic/holiday-schematic');


exports.createHoliday = (holiday) => {
  return new Promise( (resolve, reject) => {
    let newHoliday = new Holiday({
      title: holiday.title,
      startTime: holiday.startTime,
      endTime: holiday.endTime,
      allowPresence: holiday.allowPresence,
    });

    newHoliday.save()
    .then(
      () => resolve("Holiday créé!")
    )
    .catch(
      error => reject(error)
    )
  })
}

exports.getHoliday = () => {
  return new Promise( (resolve, reject) => {
    Holiday.find()
    .then((holiday) => resolve(holiday))
    .catch(error => reject("Unable to fetch Holiday from db <= "+error));
  })
}
