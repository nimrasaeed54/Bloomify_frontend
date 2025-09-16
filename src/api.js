import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const getShops = () => API.get("/shops");
export const getFunFacts = () => API.get("/funfacts");
