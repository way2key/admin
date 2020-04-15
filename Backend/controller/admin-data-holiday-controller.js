const action = require('../action/action.js');

exports.createHoliday = (req, res) => {
  action.createHoliday(req.body)
  .then(
    holiday => res.status(200).json("Vacances créées avec succès :)")
  )
  .catch(
    error => res.status(500).json("Impossible de créer des vacances <= "+error)
  )
}

exports.getHoliday = (req, res) => {
  action.getHoliday()
  .then(
    holiday => res.status(200).json(holiday)
  )
  .catch(
    error => res.status(500).json("Impossible to fetch Holiday :( <= "+error)
  )
}
