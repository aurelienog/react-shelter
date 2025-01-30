const Dog = require('../models/dog.model');
const createError = require('http-errors');

//TODO : reutilisable para la lista de perros del usuario
module.exports.exists = (req, res, next) => {
  Dog.findById(req.params.id)
    .then((dog) => {
      if (dog) {
        req.dog = dog
        next();
      } else {
        next(createError(404, 'Dog not found'))
      }
    })
    .catch(next)
}