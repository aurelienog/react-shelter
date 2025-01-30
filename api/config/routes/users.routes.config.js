const api = require('express').Router();

const users = require('../../controllers/users.controller');

api.post('/users', users.create);
api.get('/users/:id', users.detail);
api.patch('/users/:id', users.update);
api.delete('/users/:id', users.delete);

api.post('/login', users.login);

module.exports = api