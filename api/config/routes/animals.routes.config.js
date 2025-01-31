const api = require('express').Router();
const animalsMid = require('../../middlewares/animals.mid');

const animals = require('../../controllers/animals.controller');

api.get('/animals', animals.list)
api.get('/animals/:id', animalsMid.exists, animals.detail)
api.post('/animals', animals.create) //TODO middleware need admin
api.patch('/animals/:id', animalsMid.exists, animals.update) //TODO middleware need admin
api.delete('/animals/:id', animalsMid.exists, animals.delete) //TODO middleware need admin

module.exports = api;