const { Animal, Dog, Cat, OtherAnimal } = require('../models/animal.model');
const createError = require('http-errors');
const mongoose = require('mongoose');

module.exports.list = (req, res, next) => {
  const criterial = {};

  const filters = [
    "species",
    "sex",
    "size",
    "weigth",
    "license",
    "idealHome",
    "livingWithChildren",
    "livingWithDogs",
    "livingWithCats"
  ];

  filters.forEach((filter) => {
    if (req.query[filter]) {
      criterial[filter] = req.query[filter];
    }
  });

  if (req.query.maxAge) {
    criterial.age = { $lte: parseInt(req.query.maxAge, 10) };
  }

  Animal.find(criterial)
  .then((animals) => (res.json(animals)))
  .catch(next);
};

module.exports.create =(req, res, next) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: "Images are required" });
  }
  console.log(typeof req.body.license)
  req.body.age = parseInt(req.body.age);
  req.body.weight = parseInt(req.body.weight);
  req.body.images = req.files.map(file => file.path);
  console.log(req.body);
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