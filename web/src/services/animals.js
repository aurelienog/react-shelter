import http from "./base-api";

const list = () => http.get("/animals");

const detail = (id) => http.get(`/animals/${id}`);

const create = (animal) => http.post('/animals', animal);

const update = (id, animal) => http.patch(`/animals/${id}`, animal);

const remove = (id) => http.delete(`/animals/${id}`);

export default {
  list,
  detail,
  create,
  update,
  remove
}