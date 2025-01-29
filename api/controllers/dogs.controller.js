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

module.exports.detail = (req, res, next) => {
  Dog.findById(req.params.id)
  .then((dog) => {
    if (!dog) {
      return next(createError(404, "Dog not found"));
    }
    res.json(dog)
  })
  .catch(next);
};

module.exports.edit = (req, res, next) => {
  Dog.findByIdAndUpdate(req.params.id)
  .then()
  .catch(next);
};

module.exports.delete = (req, res, next) => {
  Dog.deleteOne(req.params.id)
  .then(() => res.status(204).send())
  .catch(next);
};