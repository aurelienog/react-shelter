import http from "./base-api";

const list = (query) => http.get("/animals", {params : query})
  .then((res) => res.data);

const detail = (id) => http.get(`/animals/${id}`)
  .then((res) => res.data);

const create = (animal) => http.post('/animals', animal)
  .then((res) => res.data);

const update = (id, animal) => http.patch(`/animals/${id}`, animal)
  .then((res) => res.data);

const remove = (id) => http.delete(`/animals/${id}`)
  .then((res) => res.data);

export default {
  list,
  detail,
  create,
  update,
  remove
}