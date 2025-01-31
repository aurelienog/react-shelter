const mongoose = require('mongoose');
const User = require('../models/user.model');
const createError = require('http-errors');

//modificar para ruta privada
module.exports.detail = (req, res, next) => res.json(req.user);

module.exports.create = (req, res, next) => {
  User.create(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch(next)
};

module.exports.update = (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(createError(403, "forbidden"));
  }

  Object.assign(req.user, req.body);

  req.user
    .save()
    .then((user) => res.json(user))
    .catch(next)
};

module.exports.delete = (req, res, next) => {
  User.deleteOne({_id : req.user.id})
    .then(() => res.status(204).send())
    .catch(next)
};

module.exports.login = (req, res, next) => {
  User.findOne({ email : req.body.email })
    .then((user) => {
      if (!user) {
        return next(createError(401, {errors: { password : 'Invalid credentials'}}))
      }

      user.checkPassword(req.body.password)
        .then((match) => {
          if(!match) {
            return next(createError(401, {errors: {password: 'Invalid credentials'}}))
          }
          req.session.userId = user.id;

          res.json({session : req.session, ...user.toJSON() });
        });
    })
    .catch(next)
};