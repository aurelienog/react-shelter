const Dog = require('../models/dog.model');
const createError = require('http-errors');

module.exports.list = (req, res, next) => {
  Dog.find()
  .then((dogs) => (res.json(dogs)))
  .catch(next);
};

module.exports.create =(req, res, next) => {
  console.log(req.body)
  Dog.create(req.body)
  .then((dog) => res.status(201).json(dog))
  .catch(next);
};

module.exports.detail = (req, res, next) => res.json(req.dog);

//TODO limpiar req.body
module.exports.update = (req, res, next) => {
  Object.assign(req.dog, req.body);
  req.dog.save()
    .then(dog => (res.json(dog)))
    .catch(next)
};

module.exports.delete = (req, res, next) => {
  Dog.deleteOne( {_id : req.dog.id })
  .then(() => res.status(204).send())
  .catch(next)
};