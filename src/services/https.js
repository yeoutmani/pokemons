import axios from 'axios';

axios.defaults.baseURL = "https://pokeapi.co/api/v2/item/";

const https = {
  post: axios.post,
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
};

export default https;