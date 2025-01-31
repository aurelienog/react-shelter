const { Animal } = require('../models/animal.model');
const createError = require('http-errors');

//TODO : reutilisable para la lista de perros del usuario
module.exports.exists = (req, res, next) => {
  Animal.findById(req.params.id)
    .then((animal) => {
      if (animal) {
        req.animal = animal
        next();
      } else {
        next(createError(404, 'Animal not found'))
      }
    })
    .catch(next)
}