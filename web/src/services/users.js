import http from "./base-api";

const create = async (user) => {
  const response = await http.post('/users', user); 
  return response.data;
};

const login = (user) => http.post('/login', user)
.then((res) => res.data);

const detail = (id) => http.get(`/users/${id}`)
.then((res) => res.data);

const update = (id, user) => http.patch(`/users/${id}`, user)
.then((res) => res.data);

const remove = (id) => http.post(`/users/${id}`)
.then((res) => res.data);

const logout = () => http.post('/logout')
.then((res) => res.data);

const restore = () => http.get('/user')
.then((res) => res.data);


export default {
  create,
  login,
  logout,
  detail,
  update,
  remove,
  restore
  
}