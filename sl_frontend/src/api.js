import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api/",
});

export const fetchServices = () => API.get("services/");
export const fetchConditions = () => API.get("conditions/");
export const getMethods = () => API.get("methods/");
