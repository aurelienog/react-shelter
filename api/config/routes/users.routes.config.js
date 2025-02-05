const api = require('express').Router();
const usersMid = require('../../middlewares/users.mid');
const secure = require('../../middlewares/secure.mid');

const users = require('../../controllers/users.controller');

api.post('/users', users.create);
api.get('/users/:id', secure.auth, users.detail);
api.patch('/users/:id', secure.auth, secure.isOwner, users.update);
api.delete('/users/:id', secure.auth, secure.isOwner, users.delete);

api.post('/login', users.login);
api.get('/user', users.restore)
api.post('/logout', secure.auth, users.logout) 

module.exports = api