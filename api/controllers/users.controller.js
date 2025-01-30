const mongoose = require('mongoose');
const User = require('../models/user.model');
const createError = require('http-errors');

//modificar para ruta privada
module.exports.detail = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch(next)
};

module.exports.create = (req, res, next) => {
  User.create(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch(next)
};

module.exports.update = (req, res, next) => {
  User.findByIdAndUpdate()
    .then()
    .catch()
};

module.exports.delete = (req, res, next) => {
  User.findByIdAndDelete()
  .then()
  .catch()
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