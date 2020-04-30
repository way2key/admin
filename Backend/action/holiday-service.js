const Holiday = require('../data-schematic/holiday-schematic');


exports.createHoliday = (holiday) => {
  console.log(holiday);
  return new Promise( (resolve, reject) => {
    let newHoliday = new Holiday({
      ...holiday
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
