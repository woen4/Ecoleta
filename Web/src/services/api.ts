import axios from "axios";

const api = axios.create({
  baseURL: "https://ecoleta-nlw1edition.herokuapp.com/",
});

export default api;
