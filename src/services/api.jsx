import axios from "axios";

const API = axios.create({
  baseURL: "https://products-json-server.vercel.app/",
});

export default API;
