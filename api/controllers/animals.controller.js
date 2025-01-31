const { Animal, Dog, Cat, OtherAnimal } = require('../models/animal.model');
const createError = require('http-errors');
const mongoose = require('mongoose');

module.exports.list = (req, res, next) => {
  Animal.find()
  .then((animals) => (res.json(animals)))
  .catch(next);
};

module.exports.create =(req, res, next) => {
  Animal.create(req.body)
  .then((animal) => res.status(201).json(animal))
  .catch(next);
};

module.exports.detail = (req, res, next) => res.json(req.animal);


module.exports.update = (req, res, next) => {
  Object.assign(req.animal, req.body);
  req.animal.save()
    .then(animal => (res.json(animal)))
    .catch(next)
};

module.exports.delete = (req, res, next) => {
  Animal.deleteOne( {_id : req.animal.id })
  .then(() => res.status(204).send())
  .catch(next)
};