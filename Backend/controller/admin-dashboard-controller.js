const action = require('../action/action.js');

exports.getAnAdmin = (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  action.getAdminFromToken(token)
  .then(
    (admin) => res.status(200).json(admin)
  )
  .catch(
    (error) => res.status(500).json({error})
  )

}
