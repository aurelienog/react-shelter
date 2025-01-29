const api = require('express').Router();

const dogs = require('../../controllers/dogs.controller');

api.get('/dogs', dogs.list)
api.get('/dogs/:id', dogs.detail)
api.post('/dogs', dogs.create) //TODO middleware need admin
api.patch('/dogs/:id', dogs.edit) //TODO middleware need admin
api.delete('/dogs/:id', dogs.delete) //TODO middleware need admin

module.exports = api;