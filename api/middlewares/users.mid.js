const User = require ('../models/user.model');
const createError = require('http-errors');

module.exports.exists = (req, res, next) => {
  const userId = req.params.userId || req.params.id;
  if (userId === 'me') {
    if (req.user) {
      next()
    } else {createError(401, "Missing access cookie")}
  } else {
    User.findById(userId)
      .populate("favoriteAnimals")
      .then((user) => {
        if (user) {
          req.user = user;
          next();
        } else {
          next(createError(404, "User not found"));
        }
      } )
      .catch(next)
  }

};