const api = require('express').Router();
const animalsMid = require('../../middlewares/animals.mid');
const secure = require('../../middlewares/secure.mid');

const animals = require('../../controllers/animals.controller');

api.get('/animals', animals.list)
api.get('/animals/:id', animalsMid.exists, animals.detail)
api.post('/animals', secure.auth, secure.checkRole('admin'), animals.create) //TODO middleware need admin
api.patch('/animals/:id', animalsMid.exists, secure.auth, secure.checkRole('admin'), animals.update) //TODO middleware need admin
api.delete('/animals/:id', animalsMid.exists, secure.auth, secure.checkRole('admin'), animals.delete) //TODO middleware need admin

module.exports = api;