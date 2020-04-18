const action = require('../action/action.js');

exports.createTimeplan = (req, res) => {
  action.createTimeplan(req.body)
  .then(
    () => res.status(200).json("Horaire créé avec succès :)")
  )
  .catch(
    error => res.status(500).json("Impossible de créer un horaire <= "+error)
  )
}

exports.getTimeplan = (req, res) => {
  action.getTimeplan()
  .then(
    timeplan => res.status(200).json(timeplan)
  )
  .catch(
    error => res.status(500).json("Impossible to fetch timeplan :( <= "+error)
  )
}

exports.getShiftFromId = (req, res) => {
  action.getShiftFromId(req.params.shiftId)
  .then(
    shift => res.status(200).json(shift)
  )
  .catch(
    error => res.status(500).json("Impossible to fetch shift :( <= "+error)
  )
}
