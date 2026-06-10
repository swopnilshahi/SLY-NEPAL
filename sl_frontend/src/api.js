import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:8000/api/",
// });
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const fetchHero = () => API.get("hero/");
export const fetchServices = () => API.get("services/");
export const fetchConditions = () => API.get("conditions/");
export const getMethods = () => API.get("methods/");
export const getSuccessStories = () => API.get("successstories/");
export const createAppointment = (data) =>
  API.post("appointments/", data);
export const getSlots = (data) =>
  API.post("schedules/available/", data);
export const createContact = (data) =>
  API.post("contact/", data);

export const getAboutData =  () => {
  API.get("about/");
};