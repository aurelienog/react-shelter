const api = require('express').Router();
const usersMid = require('../../middlewares/users.mid');
const secure = require('../../middlewares/secure.mid');

const users = require('../../controllers/users.controller');

api.post('/users', users.create);
api.get('/users/:id', secure.auth, usersMid.exists, users.detail);
api.patch('/users/:id', secure.auth, usersMid.exists, users.update);
api.delete('/users/:id', secure.auth, usersMid.exists, users.delete);

api.post('/login', users.login);
api.get('/logout') //TODO LOGOUT

module.exports = api