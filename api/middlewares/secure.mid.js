const User = require('../models/user.model');
const createError = require('http-errors');

module.exports.cleanBody = (req, res, next) => {
  if (req.body) {
    delete req.body._id;
    delete req.body.role;
    delete req.body.createdAt;
    delete req.body.updatedAt;
    delete req.body.confirm; //TODO confirmation mail registration
  }

  next()
};

module.exports.auth = (req, res, next) => {
  console.log("Session data:", req.session); // 👀 Ver qué contiene
  
  if(!req.session.userId) {
    return next(createError(401, "Not authenticated"));

  }  
  console.log(req.session.userId);

  User.findById(req.session.userId)
    .populate("favoriteAnimals")
    .then((user) => {
      if(user) {
        req.user = user;
        next()
      } else {
        next(createError(401, "User not found"))
      }
    })
    .catch(next);
};

module.exports.isOwner = (req, res, next) => {
      if (req.user.id !== req.params.id) {
      return next(createError(403, "forbidden"));
    } else next()
}

module.exports.checkRole = (role) => {
  return (req, res, next) => {
    if(req.user?.role === role) {
      next()
    } else {
      next(createError(403, "Forbidden"))
    }
  }
}