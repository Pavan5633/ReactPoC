import axios from '../axios-data'

const getAll = () => {
    return axios.get("/users")
  };
  
  const get = id => {
    return axios.get(`/users/${id}`)
  };
  
  const create = data => {
    return axios.post("/users", data)
  };
  const remove = id => {
    return axios.delete(`/users/${id}`);
  };

  
  const removeAll = () => {
    return axios.delete(`/users`);
  };
  export default {
    getAll,
    get,
    create,
    remove,removeAll
  }