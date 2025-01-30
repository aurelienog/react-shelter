const api = require('express').Router();
const dogsMid = require('../../middlewares/dogs.mid');

const dogs = require('../../controllers/dogs.controller');

api.get('/dogs', dogs.list)
api.get('/dogs/:id', dogsMid.exists, dogs.detail)
api.post('/dogs', dogs.create) //TODO middleware need admin
api.patch('/dogs/:id', dogsMid.exists, dogs.update) //TODO middleware need admin
api.delete('/dogs/:id', dogsMid.exists, dogs.delete) //TODO middleware need admin

module.exports = api;