import http from "./base-api";

const create = (user) => http.post('/users', user);

const login = (user) => http.post('/login', user);

const detail = (id) => http.get(`/users/${id}`);

const update = (id, user) => http.patch(`/users/${id}`, user);

const remove = (id) => http.post(`/users/${id}`);


export default {
  create,
  login,
  detail,
  update,
  remove
}