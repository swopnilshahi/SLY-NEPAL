import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:8000/api/",
// });
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const fetchServices = () => API.get("services/");
export const fetchConditions = () => API.get("conditions/");
export const getMethods = () => API.get("methods/");
export const getSuccessStories = () => API.get("successstories/");
export const createAppointment = (data) =>
  API.post("appointments/", data);