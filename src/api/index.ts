import axios from "axios";

export const API_URL = "http://127.0.0.1:8000/";

export const $api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

$api.interceptors.request.use((config) => {
  config.headers!["Authorization"] = `Token ${localStorage.getItem("token")}`;
  return config;
});
